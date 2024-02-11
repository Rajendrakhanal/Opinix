import React from "react";
import Keywords from "./Keywords";
import SentimentByTopics from "./SentimentByTopics";
import SentimentOverTime from "./SentimentOverTime";

const Analytics = ({ keywords, sentimentByTopics, sentimentOverTime }) => {
  return (
    <>
      <Keywords keywords={keywords} />
      <SentimentByTopics sentimentByTopics={sentimentByTopics} />
      <SentimentOverTime sentimentOverTime={sentimentOverTime} />
    </>
  );
};

export default Analytics;
