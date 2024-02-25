import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div style={{width: "fit-content", margin: "2rem auto"}}>
    <ClipLoader
    color="blue"
    size={150}
    />
    </div>
    );

};

export default Loading;
