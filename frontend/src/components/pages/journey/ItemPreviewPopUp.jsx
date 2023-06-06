const ItemPreviewPopUp = ({ isFadingOut }) => {
  return (
    <div className={`item-preview ${isFadingOut ? "fade-out" : ""}`}>
      <img src="" alt="" />
      <p>PaintingName</p>
    </div>
  );
};

export default ItemPreviewPopUp;
