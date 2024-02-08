import React from "react";
import WordCloud from "react-wordcloud";
const Keywords = ({ keywords }) => {
  const cloud = keywords.map((keywords) => ({ text: keywords, value: 1 }));
  return (
    <div
      style={{
        height: "25rem",
        width: "25rem",
        backgroundColor: "white",
        pointerEvents: "none",
      }}
    >
      <WordCloud
        words={cloud}
        options={{
          rotations: 2,
          rotationAngles: [-90, 0],
          fontFamily: "Arial",
          fontSizes: [20, 60],
          fontStyle: "normal",
          fontWeight: "normal",
          padding: 1,
          scale: "sqrt",
          spiral: "rectangular",
          transitionDuration: 1000,
        }}
      />
    </div>
  );
};

export default Keywords;
