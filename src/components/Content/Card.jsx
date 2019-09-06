import React, { useState } from 'react';
import './card.scss';

function ImageContainer({cardContent}) {
  const [srcIndex, setSrcIndex] = useState(0);

  function handleArrowClick(arrowDirection, imgSrcArray) {
    if ((arrowDirection === "left") && srcIndex === 0) {
      setSrcIndex(imgSrcArray.length - 1);
    } else if (arrowDirection === "left") {
      setSrcIndex(srcIndex - 1);
    } else if ((arrowDirection === "right") && (srcIndex === imgSrcArray.length - 1)) {
      setSrcIndex(0);
    } else {
      setSrcIndex(srcIndex + 1);
    }
  }

  return(
    <div className="image-wrapper">
      {cardContent.imgSrcArray.length > 1 &&
        <button className="left-arrow" onClick={() => handleArrowClick("left", cardContent.imgSrcArray)}>
            <div className="left-arrow-mask"></div>
          <img className="arrow-icon" src={require("../../assets/left-arrow.svg")} alt="left-arrow"/>
        </button>
      }
      <button className="image-container">
        <img src={require(`../../assets/${cardContent.imgSrcArray[srcIndex]}`)} alt={cardContent.alt}/>
      </button>
      {cardContent.imgSrcArray.length > 1 &&
        <button className="right-arrow" onClick={() => handleArrowClick("right", cardContent.imgSrcArray)}>
            <div className="right-arrow-mask"></div>
          <img className="arrow-icon" src={require("../../assets/right-arrow.svg")} alt="right-arrow"/>
        </button>
      }
    </div>
  );
}

function Card({cardContent}) {
  return (
    <div className="card">
      {cardContent.title &&
        <div className="item">
          <span className="label">Title:</span>
          <span>{cardContent.title}</span>
        </div>
      }
      {cardContent.compilation &&
        <div className="item">
          <span className="label">Compilation:</span>
          <span>{cardContent.compilation}</span>
        </div>
      }
      {cardContent.description &&
        <div className="item">
          <span className="label">Description:</span>
          <span>{cardContent.description}</span>
        </div>
      }
      {cardContent.media &&
        <div className="item">
          <span className="label">Media:</span>
          <span>{cardContent.media}</span>
        </div>
      }
      {cardContent.imgSrcArray &&
        <ImageContainer cardContent={cardContent}/>
      }
      {cardContent.template &&
        <div className="template">
          {<cardContent.template/>}
        </div>
      }
    </div>
  );
}

export default Card;
