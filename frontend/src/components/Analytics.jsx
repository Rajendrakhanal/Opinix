import React from "react";
import Keywords from "./Keywords";
import SentimentByTopics from "./SentimentByTopics";
import SentimentOverTime from "./SentimentOverTime";
import "../../styles/components/Analytics.css"
import Comments from "./Comments";

const Analytics = ({ keywords, sentimentByTopics, sentimentOverTime }) => {
  return (
    <div className="ant-outer-div">
      <Comments />
      <Keywords keywords={keywords} />
     {/* <SentimentByTopics sentimentByTopics={sentimentByTopics} />
  <SentimentOverTime sentimentOverTime={sentimentOverTime} /> */}
    </div>
  );
};

export default Analytics;
