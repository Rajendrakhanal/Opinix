import React from "react";
import "../../styles/components/Comments.css";

const Comments = () => {
  const comments = {
    "Purchased this for my device, it worked as advertised. You can never have too much phone memory, since I download a lot of stuff this was a no brainer for me":
      "Positive",
    "indeed a issue": "Negative",
    "some issue": "Neutral",
  };
  const commentList = Object.entries(comments).map(([key, value]) => {
    return (
      <>
        <div className="ct-outer-div">
          <div className="ct-key-div">{key}</div>
          <hr />
          <div className="ct-value-div">{value}</div>
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
