import React, { useState } from "react";
import FileInput from "../components/FileInput";
import parseCSV from "../utils/parseCSV";

const AnalyzePage = () => {
  const [csvData, setCSVData] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    if (file) {
      parseCSV(file, (data) => {
        setCSVData(data);
      });
    }
  };

  return (
    <div>
      <h1>CSV Reader</h1>
      <FileInput onFileChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {csvData.map((row, index) => (
          <li key={index}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyzePage;
