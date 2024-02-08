import { useState } from "react";

const FileInput = ({ onFileChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileChange(file);
  };

  return (
    <>
      <input
        style={{
          backgroundColor: "white",
          padding: "0.25rem 1rem",
          marginRight: "1rem",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
        type="file"
        accept=".csv"
        onChange={handleFileChange}
      />
    </>
  );
};

export default FileInput;
