import { useState } from "react";

export const SingleColor = ({ hexColor }) => {

  const [copy, setCopy] = useState(false);

  const handleCopy = (color) => () => {
    const colorNew = `#${color}`;

    navigator.clipboard.writeText(colorNew);
    setCopy(true);
    setTimeout(() => {
      setCopy(false)
    }, 2000);
  };
  return (
    <>
      <div className="single-card" style={{ backgroundColor: `#${hexColor}` }}>
        <div className="content">
          <p>#{hexColor}</p>
          <button onClick={handleCopy(hexColor)}>
            <img src="https://i.ibb.co/Xt5rgRm/clip-Transparent.png" alt="" />
          </button>
        </div>
        {copy ? <p className="copy-alert">Copied!</p> : null}
      </div>
    </>
  );
};
