import React, { useState } from "react";
import FileInput from "../components/FileInput";
import parseCSV from "../utils/parseCSV";
import { useAnalyzeDataMutation } from "../slices/analyzeApiSlice";

const AnalyzePage = () => {
  const [analyzeData, { isLoading }] = useAnalyzeDataMutation();

  const [csvData, setCSVData] = useState([]);

  const handleFileChange = (selectedFile) => {
    if (selectedFile) {
      parseCSV(selectedFile, (data) => {
        setCSVData(data);
      });
    }
  };

  const clickHandler = async () => {
    try {
      const res = await analyzeData({ csvData }).unwrap();
      console.log(res);
      // console.log({ ...csvData });
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <div>
      <h1>CSV Reader</h1>
      <FileInput onFileChange={handleFileChange} />
      <button onClick={clickHandler}>
        {isLoading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
};

export default AnalyzePage;
