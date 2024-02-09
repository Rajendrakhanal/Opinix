import React from "react";
import Keywords from "./Keywords";
import SentimentByTopics from "./SentimentByTopics";

const Analytics = ({ keywords, sentimentByTopics, sentimentOverTIme }) => {
  return (
    <>
      <Keywords keywords={keywords} />
      <SentimentByTopics
        key={JSON.stringify(sentimentByTopics)}
        sentimentByTopics={sentimentByTopics}
      />
    </>
  );
};

export default Analytics;
