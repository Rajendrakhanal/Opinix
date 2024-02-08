import React, { useState } from "react";
import FileInput from "../components/FileInput";
// import parseCSV from "../utils/parseCSV";
import { useAnalyzeDataMutation } from "../slices/analyzeApiSlice";
import Loading from "../components/Loading";
import "../../styles/pages/AnalyzePage.css";
import Analytics from "../components/Analytics";

const AnalyzePage = () => {
  const [analyzeData, { isLoading }] = useAnalyzeDataMutation();
  const [csvFile, setCsvFile] = useState(null);
  const [keywords, setKeywords] = useState();
  const [sentimentByTopics, setSentimentByTopics] = useState();
  const [sentimentOverTime, setSentimentOverTime] = useState();
  const [analysisDone, setAnalysisDone] = useState(false);

  const handleFileChange = (selectedFile) => {
    setCsvFile(selectedFile);
  };
  const clickHandler = async () => {
    try {
      if (csvFile) {
        const formData = new FormData();
        formData.append("file", csvFile);
        const res = await analyzeData(formData).unwrap();
        const parsedData = JSON.parse(res);
        setKeywords(parsedData.keywords);
        setSentimentByTopics(parsedData.sentiment_by_topics);
        setSentimentOverTime(parsedData.sentiment_over_time);
        setAnalysisDone(true);
      }
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <div className="apMainDiv">
      <div className="apInputDiv">
        <FileInput onFileChange={handleFileChange} />
        <button
          className="apBtn"
          onClick={clickHandler}
          disabled={isLoading ? true : false}
        >
          Analyze
        </button>
      </div>
      <div className="apLoadingDiv">{isLoading && <Loading />}</div>
      {analysisDone && !isLoading && (
        <Analytics
          keywords={keywords}
          sentimentByTopics={sentimentByTopics}
          sentimentOverTime={sentimentOverTime}
        />
      )}
    </div>
  );
};

export default AnalyzePage;
