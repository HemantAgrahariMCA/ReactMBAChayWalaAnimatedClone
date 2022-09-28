import React from "react";

const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {
  return (
    <section className="section">
      <div>
        <h3>{h3}</h3>
        <p>{text}</p>
        {hasBtn && <button>{btnTxt}</button>}

        <div>
          <img src={imgSrc} alt="cover" />
        </div>
      </div>
    </section>
  );
};

export default Section;
