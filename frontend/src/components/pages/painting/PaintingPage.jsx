import { useState, useEffect, useRef } from "react";
import ApiService from "../../../services/ApiService";
import CommentList from "./CommentList";
// import { useParams } from "react-router-dom";
import "./painting-page.scss";
// import { FastAverageColor } from "fast-average-color";
import sampleImage from "../../../assets/sampleimage.png";
import downIcon from "../../../assets/icons/down.svg";
import RenderImage from "../../shared/RenderImage";

const PaintingPage = (
  {
    /* painting */
  }
) => {
  const [isOpen, setIsOpen] = useState(false);
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
  const imageRef = useRef(null);
  // const { paintingId } = /*useParams();*/
  const paintingId = 3;

  // const {artistName, paintingName, dateCreated, description, imagePath} = painting;

  // dummy data
  const painting = {
    artistName: "Artist Name",
    paintingName: "Painting Name",
    dateCreated: "2022",
    description: "Painting Description",
    imagePath: "https://source.unsplash.com/random",
  };

  const fetchComments = async () => {
    try {
      // return await ApiService.getById(`comments`, paintingId);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    // fetchComments().then(res => setComments(res));
    // console.log(comments);
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  const image = "https://loremflickr.com/320/240";

  return (
    <div className="page painting">
      {paintingId && (
        <>
          <div
            className="background image"
            style={{
              backgroundImage: `url('${image}')`,
            }}
          ></div>
          <div className="background color"></div>

          <header>
            <nav>
              <button onClick={handleClick}>
                <img src={downIcon} alt="downwards pointing icon" />
              </button>
            </nav>
            <RenderImage image={image} altText={painting.paintingName} />
          </header>
          <div className="content">
            <div
              className="image-reflection"
              style={{ backgroundImage: `url('${image}')` }}
            ></div>
            <h2>{painting.paintingName}</h2>
            <p>{painting.dateCreated}</p>
            <section className="description">
              <h3>Description</h3>
              <p>{painting.description}</p>
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
