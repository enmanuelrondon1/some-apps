export const ImageItem = ({ title, url }) => {
  return (
    <>
      <div>
        <img src={url} alt="" />
        <p>{title}</p>
      </div>
    </>
  );
};
