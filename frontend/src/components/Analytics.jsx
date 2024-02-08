import React from "react";
import Keywords from "./Keywords";

const Analytics = ({ keywords, sentimentByTopics, sentimentOverTIme }) => {
  return (
    <>
      <Keywords keywords={keywords} />
    </>
  );
};

export default Analytics;
