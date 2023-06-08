import React, {useEffect, useRef} from 'react';

function gradient(a, b) {
    return (b.y - a.y) / (b.x - a.x);
}

function bzCurve(points, f, t, useGradient, context) {
    if (typeof f === 'undefined') f = 0.3;
    if (typeof t === 'undefined') t = 0.6;

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

function drawPoints(points, color, size, context) {
    for (let i = 0; i < points.length; i++) {
        context.fillStyle = color;
        context.beginPath();
        context.arc(
            points[i].x,
            points[i].y,
            size,
            0,
            Math.PI * 2,
            true
        );
        context.closePath();
        context.fill();
    }
}

function generatePoints(points, amountOfPoints) {
    let Y = 400;
    let X = 300;
    let depth = 60;
    const width = 10;
    const multiplier = 10;
    const depthStepReduction = 4;

    for (let i = 0; i < amountOfPoints; i++) {
        const p = {x: X, y: Y};
        points.push(p);

        if (i % 2 === 0) {
            X += width * Math.floor(Math.random() * (multiplier - 2)) + 2;
        } else {
            X -= width * Math.floor(Math.random() * (multiplier - 2)) + 2;
        }
        Y = Y - depth;
        depth -= depthStepReduction;
    }
}

function drawMap(context) {
    const points = [];

    // Generate the points based on amountOfPoints.
    generatePoints(points, 10);

    // Draw smooth line.
    context.setLineDash([0]);
    context.lineWidth = 3;
    context.strokeStyle = 'black';
    bzCurve(points, 0.5, 0.1, false, context);

    // Draw points
    drawPoints(points, 'red', 3, context);
}

const CanvasMap = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        drawMap(context);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="GFG"
            width="600"
            height="400"
            style={{border: '2px solid black'}}
        ></canvas>
    );
}



export default CanvasMap;
