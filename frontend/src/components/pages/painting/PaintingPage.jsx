import { useState, useEffect, useRef } from "react";
import ApiService from "../../../services/ApiService";
import CommentList from "./CommentList";
// import { useParams } from "react-router-dom";
import "./painting-page.scss";
import { FastAverageColor } from "fast-average-color";
import sampleImage from "../../../assets/sampleimage.png";

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

  // dummy data
  const painting = {
    image_url: "https://source.unsplash.com/random",
    painting_name: "Painting Name",
    year_created: "2022",
    description: "Painting Description",
  };

  const fetchComments = async () => {
    try {
      // return await ApiService.getById(paintingId)
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

  return (
    <div className="page painting">
      PaintingPage
      {paintingId && (
        <>
          <div
            className="background image"
            style={{
              backgroundImage: "url('https://source.unsplash.com/random')",
            }}
          ></div>
          <div className="background color"></div>
          <header>
            <nav>
              <button onClick={handleClick}>Close</button>
            </nav>
            <div className="image-wrapper">
              <img src={painting.image_url} alt={painting.painting_name} />
            </div>
            <h1>{painting.painting_name}</h1>
            <p>{painting.year_created}</p>
          </header>
          <section className="description">
            <h2>Description</h2>
            <p>{painting.description}</p>
          </section>
          <section className="comments">
            <div>
              <h2>Comments</h2>
              <button>Add comment</button>
            </div>
            {comments && <CommentList comments={comments} />}
          </section>
        </>
      )}
    </div>
  );
};

export default PaintingPage;
