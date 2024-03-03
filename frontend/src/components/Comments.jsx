import React from "react";
import "../../styles/components/Comments.css";

const Comments = ({ comments }) => {
  const commentList = Object.entries(comments).map(([key, value]) => {
    const sentimentClass = value.toLowerCase();

    return (
      <>
        <div className="ct-outer-div">
          <div className={`ct-key-div ${sentimentClass}`}>{key}</div>
          <hr />
          <div className={`ct-value-div ${sentimentClass}`}>{value}</div>
        </div>
        <hr className="bottom-hr" />
      </>
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
