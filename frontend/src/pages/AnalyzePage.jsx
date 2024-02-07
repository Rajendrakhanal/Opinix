import React, { useState } from "react";
import FileInput from "../components/FileInput";
// import parseCSV from "../utils/parseCSV";
import { useAnalyzeDataMutation } from "../slices/analyzeApiSlice";
import Loading from "../components/Loading";
const AnalyzePage = () => {
  const [analyzeData, { isLoading }] = useAnalyzeDataMutation();
  const [csvFile, setCsvFile] = useState(null);
  const [data, setData] = useState();
  const [keywords, setKeywords] = useState();
  const [sentimentByTopics, setSentimentByTopics] = useState();
  const [sentimentOverTime, setSentimentOverTime] = useState();

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
        setData(parsedData);
        setKeywords(parsedData.keywords);
        setSentimentByTopics(parsedData.sentiment_by_topics);
        setSentimentOverTime(parsedData.sentiment_over_time);
      }
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };
  console.log("keywords:", keywords);
  console.log("sentimentByTopics:", sentimentByTopics);
  console.log("sentimentOverTime:", sentimentOverTime);

  return (
    <div>
      <h1>CSV Reader</h1>
      <FileInput onFileChange={handleFileChange} />
      <button onClick={clickHandler} disabled={isLoading ? true : false}>
        Analyze
      </button>
      {isLoading ? <Loading /> : "NotLoading"}
    </div>
  );
};

export default AnalyzePage;
