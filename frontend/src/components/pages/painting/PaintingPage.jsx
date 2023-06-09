import { useState, useEffect, useLayoutEffect } from "react";
import ApiService from "../../../services/ApiService";
import CommentList from "./CommentList";
import { useParams } from "react-router-dom";
import "./painting-page.scss";
import downIcon from "../../../assets/icons/down.svg";
import RenderImage from "../../shared/RenderImage";

const PaintingPage = ({ painting, isVisible, setIsVisible }) => {
  const [comments, setComments] = useState([]);
  const { paintingRouteId } = useParams();
  const [currentPaintingData, setCurrentPaintingData] = useState({ painting });

  useEffect(() => {
    if (painting != null) {
      setCurrentPaintingData(painting);
    } else if (paintingRouteId != null) {
      const fetchCurrentPaintingData = async () => {
        try {
          const response = await ApiService.getById(
            "painting",
            paintingRouteId
          );
          setCurrentPaintingData(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchCurrentPaintingData();
    }
  }, [painting, paintingRouteId]);

  useEffect(() => {
    const fetchComments = async () => {
      if (currentPaintingData.id) {
        try {
          const response = await ApiService.getById(
            "painting",
            `${currentPaintingData.id}/comments`
          );
          setComments(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchComments();
  }, [currentPaintingData.id]);

  const handleClick = () => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  };

  return (
    <div
      className={`page painting ${
        isVisible != undefined && isVisible ? "visible" : "not-visible"
      }`}
    >
      {currentPaintingData && (
        <>
          <p>{paintingRouteId}</p>
          <div
            className="background image"
            style={{
              backgroundImage: `url('${currentPaintingData.imagePath}')`,
            }}
          ></div>
          <div className="background color"></div>
          <header>
            <nav>
              <button onClick={handleClick}>
                <img src={downIcon} alt="downwards pointing icon" />
              </button>
            </nav>
            <RenderImage
              image={currentPaintingData.imagePath}
              altText={currentPaintingData.paintingName}
            />
          </header>
          <div className="content">
            <div
              className="image-reflection"
              style={{
                backgroundImage: `url('${currentPaintingData.imagePath}')`,
              }}
            ></div>
            <h2>{currentPaintingData.paintingName}</h2>
            <p>{currentPaintingData.dateCreated}</p>
            <section className="description">
              <h3>Om kunstverket</h3>
              <p>{currentPaintingData.description}</p>
            </section>
            <section className="comments">
              <div>
                <h3>Kommentarer</h3>
              </div>
              {comments && <CommentList comments={comments} />}
              <button className="add-comment-button">
                Legg igjen dine tanker
              </button>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default PaintingPage;
