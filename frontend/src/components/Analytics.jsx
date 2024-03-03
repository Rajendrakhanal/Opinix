import React from "react";
import Keywords from "./Keywords";
import SentimentByTopics from "./SentimentByTopics";
import SentimentOverTime from "./SentimentOverTime";
import "../../styles/components/Analytics.css";
import Comments from "./Comments";

const Analytics = ({
  comments,
  keywords,
  sentimentByTopics,
  sentimentOverTime,
}) => {
  return (
    <div className="ant-outer-div">
      <div className="ant-comments-div">
        <Comments comments={comments} />
      </div>
      <div className="ant-rem-div">
        <Keywords keywords={keywords} />
        {/* <SentimentByTopics sentimentByTopics={sentimentByTopics} />
    <SentimentOverTime sentimentOverTime={sentimentOverTime} /> */}
      </div>
    </div>
  );
};

export default Analytics;
