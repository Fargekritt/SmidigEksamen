import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./journey-page.scss";

// Sets extra bending on the path.
function gradient(a, b) {
  return (b.y - a.y) / (b.x - a.x);
}

/**
 * Calibrates a curved line from the points and "Stroke" them.
 * @param points Array of points.
 * @param f Calibrating curve value.
 * @param t Calibrating curve value.
 * @param useGradient Use gradient bool.
 * @param context Canvas context.
 */
function bzCurve(points, f, t, useGradient, context) {
  if (typeof f === "undefined") f = 0.3;
  if (typeof t === "undefined") t = 0.6;

  context.beginPath();
  context.moveTo(points[0].x, points[0].y);

  let m = 0;
  let dx1 = 0;
  let dy1 = 0;
  let dx2;
  let dy2;

  let preP = points[0];

  for (let i = 1; i < points.length; i++) {
    const curP = points[i];
    const nexP = points[i + 1];

    if (nexP) {
      if (useGradient) {
        m = gradient(preP, nexP);
      }
      dy2 = (nexP.y - curP.y) * -f;
      dx2 = dy2 * m * t;
    } else {
      dx2 = 0;
      dy2 = 0;
    }

    context.bezierCurveTo(
      preP.x - dx1,
      preP.y - dy1,
      curP.x + dx2,
      curP.y + dy2,
      curP.x,
      curP.y
    );

    dx1 = dx2;
    dy1 = dy2;
    preP = curP;
  }
  context.stroke();
}

/**
 * Loops through array of points and draw them to the canvas.
 * @param points Array containing points.
 * @param color Color on the points.
 * @param size Size of the points.
 * @param context canvas context.
 * @param handleClick Function to handle click.
 * @param currStop Number indicating the index of the current stop.
 */
function drawPoints(points, color, size, context, handleClick, currStop) {
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    context.fillStyle = color;
    context.beginPath();

    // Add click event listener to each point
    context.canvas.addEventListener("click", event => {
      const rect = context.canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;

      // Check if the click coordinates are within the bounds of the point
      if (
        clickX >= point.x - size &&
        clickX <= point.x + size &&
        clickY >= point.y - size &&
        clickY <= point.y + size
      ) {
        handleClick(i); // Trigger the click event handler
      }
    });
  }
}

/**
 * Generate points with random locations.
 * @param setCanvasHeight.
 * @param amountOfPoints Amount of points generated.
 */
function generatePoints(amountOfPoints) {
  let height = amountOfPoints * 60;

  // Start at middle bottom of canvas.
  let Y = height - height / 10;
  let X = 200;

  // Control the length of Y.
  let depth = 60;
  const width = 10;
  const multiplier = 10;
  const depthStepReduction = 2; // Indicate the value of amount of % reduction of space between each stop.

  const points = [];
  for (let i = 0; i < amountOfPoints; i++) {
    const p = { x: X, y: Y };
    points.push(p);

    if (i % 2 === 0) {
      X += width * Math.floor(Math.random() * (multiplier - 2)) + 2;
    } else {
      X -= width * Math.floor(Math.random() * (multiplier - 2)) + 2;
    }
    if (X > 380) {
      X = 380;
    } else if (X < 20) {
      X = 20;
    }

    Y = Y - depth;
    if (depth > 10) {
      depth = (depth / 100) * (100 - depthStepReduction);
    } else {
      depth = 10;
    }
  }

  return points;
}

/*
 * Set the settings for the line and draw it with bzCurve.
 */
function drawMap(coordinates, context) {
  // Draw smooth line.
  context.setLineDash([0]);
  context.lineWidth = 3;
  context.strokeStyle = "#777";
  bzCurve(coordinates, 0.5, 0.1, false, context);
}

const CanvasMap = ({
  progress,
  setProgress,
  coordinates,
  setCoordinates,
  canvas,
  setCanvas,
}) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [canvasHeight, setCanvasHeight] = useState(progress.stops * 60);

  // Handle the click event for the specific point
  const handleClick = index => {
    setProgress(prevState => {
      return { ...prevState, currentStop: index };
    });
  };

  useEffect(() => {
    if (context) {
      // Generate the points based on amountOfPoints.
      const generatedPoints = generatePoints(progress.stops);

      setCoordinates(generatedPoints);

      // Draw curved line.
      drawMap(generatedPoints, context);

      // Draw points
      drawPoints(
        generatedPoints,
        "grey",
        3,
        context,
        handleClick,
        progress.currentStop
      );
    }
  }, [context]);

  useEffect(() => {
    if (setCanvas != undefined) {
      const canvas = canvasRef.current;
      setCanvas(canvas);
      setContext(canvas.getContext("2d"));
    }
  }, [setCanvas]);

  useLayoutEffect(() => {
    if (progress.currentStop !== undefined) {
      if (context) {
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
        drawMap(coordinates, context);
        drawPoints(
          coordinates,
          "grey",
          3,
          context,
          handleClick,
          progress.currentStop
        );
      }
    }
  }, [progress.currentStop]);

  return (
    <canvas
      className="journey-map"
      ref={canvasRef}
      id="GFG"
      width="400"
      height={canvasHeight}
    ></canvas>
  );
};

export default CanvasMap;
