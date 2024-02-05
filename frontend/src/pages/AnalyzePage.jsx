import React, { useState } from "react";
import FileInput from "../components/FileInput";
// import parseCSV from "../utils/parseCSV";
import { useAnalyzeDataMutation } from "../slices/analyzeApiSlice";

const AnalyzePage = () => {
  const [analyzeData, { isLoading }] = useAnalyzeDataMutation();

  const [csvFile, setCsvFile] = useState(null);

  const handleFileChange = (selectedFile) => {
    setCsvFile(selectedFile);
  };

  const clickHandler = async () => {
    try {
      if (csvFile) {
        const formData = new FormData();
        formData.append("file", csvFile);
        const res = await analyzeData(formData).unwrap();
        {
          /* console.log(res); */
        }
      }
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
