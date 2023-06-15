import { useState, useEffect, useLayoutEffect } from "react";
import ApiService from "../../../services/ApiService";
import CommentList from "../comments/CommentList";
import { useParams } from "react-router-dom";
import "./painting-page.scss";
import downIcon from "../../../assets/icons/down.svg";
import RenderImage from "../../shared/RenderImage";
import CommentPage from "../comments/CommentPage";

const PaintingPage = ({ painting, setIsVisible }) => {
  const [comments, setComments] = useState([]);
  const [commentPageIsVisible, setCommentPageIsVisible] = useState(false);
  const [animateClosePaintingPage, setAnimateClosePaintingPage] =
    useState(false);
  const { paintingRouteId } = useParams();
  const [currentPaintingData, setCurrentPaintingData] = useState({ painting });

  const fetchCurrentPaintingData = async paintingRouteId => {
    try {
      return await ApiService.getById("painting", paintingRouteId).then(res =>
        setCurrentPaintingData(res.data).catch(err => Promise.reject(err))
      );
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    if (painting != null) {
      setCurrentPaintingData(painting);
    } else if (paintingRouteId != null) {
      fetchCurrentPaintingData(paintingRouteId);
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
          return Promise.reject(err);
        }
      }
    };
    fetchComments();
  }, [currentPaintingData]);

  return (
    <>
      <div
        onAnimationEnd={() => {
          if (animateClosePaintingPage === true) {
            setIsVisible(false);
            setAnimateClosePaintingPage(false);
          }
        }}
        className={`page painting ${
          !animateClosePaintingPage ? "visible" : "not-visible"
        }`}
      >
        {currentPaintingData && (
          <>
            <header className="page-header">
              {paintingRouteId === undefined && (
                <button onClick={() => setAnimateClosePaintingPage(true)}>
                  <img src={downIcon} alt="downwards pointing icon" />
                </button>
              )}
            </header>

            <div className="painting-content-wrapper">
              <div
                className="background image"
                style={{
                  backgroundImage: `url('${currentPaintingData.imagePath}')`,
                }}
              ></div>
              <div className="background color"></div>
              <RenderImage
                image={currentPaintingData.imagePath}
                altText={currentPaintingData.paintingName}
              />
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
                <section
                  className="comments"
                  onClick={() => setCommentPageIsVisible(true)}
                >
                  <div>
                    <h3>Kommentarer</h3>
                  </div>
                  {comments && <CommentList comments={comments} />}
                </section>
              </div>
            </div>
          </>
        )}
        {commentPageIsVisible && (
          <CommentPage
            paintingName={currentPaintingData.paintingName}
            paintingId={painting.id}
            isVisible={commentPageIsVisible}
            setIsVisible={setCommentPageIsVisible}
            comments={comments}
            setComments={setComments}
          />
        )}
      </div>
    </>
  );
};

export default PaintingPage;
