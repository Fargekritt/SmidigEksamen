import { useState, useEffect, useRef, useContext } from "react";
import ApiService from "../../../services/ApiService";
import CommentList from "./CommentList";
import { useParams } from "react-router-dom";
import "./painting-page.scss";
import downIcon from "../../../assets/icons/down.svg";
import RenderImage from "../../shared/RenderImage";
import { JourneyContext } from "../../../contexts/JourneyContext";
import { Link } from "react-router-dom";

const PaintingPage = ({ painting, isVisible, setIsVisible }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "This is a comment",
      date: "2022-01-01",
    },
    {
      id: 2,
      text: "This is another comment",
      date: "2022-01-02",
    },
    {
      id: 3,
      text: "This is yet another comment",
      date: "2022-01-03",
    },
    {
      id: 4,
      text: "This is yet another comment",
      date: "2022-01-03",
    },
    {
      id: 5,
      text: "This is yet another comment",
      date: "2022-01-03",
    },
  ]);
  const { paintingRouteId } = useParams();
  const [currentPaintingData, setCurrentPaintingData] = useState({ painting });

  useEffect(() => {
    if (painting != null) {
      setCurrentPaintingData(painting);
      return;
    } else {
      const fetchCurrentPaintingData = async () => {
        try {
          await ApiService.getById("painting", paintingRouteId).then(res => {
            setCurrentPaintingData(res.data);
          });
        } catch (err) {
          console.log(err);
        }
      };
      fetchCurrentPaintingData();
    }
  }, [painting]);

  useEffect(() => {
    const fetchComments = async () => {
      if (currentPaintingData.id != null) {
        try {
          return await ApiService.getById(
            `painting`,
            `${currentPaintingData.id}/comments`
          ).then(res => {
            setComments(res.data);
          });
        } catch (err) {
          return Promise.reject(err);
        }
      }
    };
    fetchComments();
  }, [currentPaintingData.id]);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="page painting">
      <p>hello</p>
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
              <Link to={`/journey`}>
                <button onClick={handleClick}>
                  <img src={downIcon} alt="downwards pointing icon" />
                </button>
              </Link>
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
              <h3>Description</h3>
              <p>{currentPaintingData.description}</p>
            </section>
            <section className="comments">
              <div>
                <h3>Comments</h3>
                <button>Add comment</button>
              </div>
              {comments && <CommentList comments={comments} />}
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default PaintingPage;
