import React, { useState } from "react";

const FileInput = ({ onFileChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(event.target.files);
    onFileChange(file);
  };

  return (
    <>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {/*<button onClick={handleFileChange}>Analyze</button>*/}
    </>
  );
};

export default FileInput;
