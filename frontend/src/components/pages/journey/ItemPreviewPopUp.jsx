import RenderImage from "../../shared/RenderImage";
import { useState, useEffect } from "react";
import ApiService from "../../../services/ApiService";

const ItemPreviewPopUp = ({ isFadingOut, paintingId }) => {
  const [painting, setPainting] = useState({ paintingName: "", imagePath: "" });

  useEffect(() => {
    const fetchPaintingData = async () => {
      try {
        const nameResponse = await ApiService.getById(
          "painting",
          paintingId + "/name"
        );
        const pathResponse = await ApiService.getById(
          "painting",
          paintingId + "/path"
        );

        const updatedPainting = {
          paintingName: nameResponse.data,
          imagePath: pathResponse.data,
        };

        setPainting(updatedPainting);
      } catch (err) {
        return Promise.reject(err);
      }
    };

    fetchPaintingData();
  }, [paintingId]);

  return (
    <>
      {painting && (
        <div className={`item-preview ${isFadingOut ? "fade-out" : ""}`}>
          <RenderImage
            image={painting.imagePath}
            altText={painting.paintingName}
          />
          <p>{painting.paintingName}</p>
        </div>
      )}
    </>
  );
};

export default ItemPreviewPopUp;
