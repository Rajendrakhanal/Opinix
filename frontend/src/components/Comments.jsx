import React from "react";
import "../../styles/components/Comments.css";

const Comments = ({ comments }) => {
  const commentList = Object.entries(comments).map(([key, value], index) => {
    const sentimentClass = value.toLowerCase();

    return (
      <div key={index}>
        <div className="ct-outer-div">
          <div className={`ct-key-div ${sentimentClass}`}>{key}</div>
          <hr />
          <div className={`ct-value-div ${sentimentClass}`}>{value}</div>
        </div>
        <hr className="bottom-hr" />
      </div>
    );
  });

  return (
    <div className="ct-list">
      <div className="ct-title">
        <h3>Comments</h3>
        <h3>Sentiments</h3>
      </div>
      {commentList}
    </div>
  );
};

export default Comments;
