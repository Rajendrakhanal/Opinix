import React, { useState, useEffect } from "react";
import FileInput from "../components/FileInput";
// import parseCSV from "../utils/parseCSV";
import { useAnalyzeDataMutation } from "../slices/analyzeApiSlice";
import Loading from "../components/Loading";
import "../../styles/pages/AnalyzePage.css";
import Analytics from "../components/Analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const AnalyzePage = () => {
  const [analyzeData, { isLoading }] = useAnalyzeDataMutation();
  const [csvFile, setCsvFile] = useState();
  const [keywords, setKeywords] = useState();
  const [sentimentByTopics, setSentimentByTopics] = useState();
  const [sentimentOverTime, setSentimentOverTime] = useState();
  const [analysisDone, setAnalysisDone] = useState(false);
  const navigate = useNavigate();
  const csvDb = getStorage(app);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, [navigate]);

  const handleFileChange = (selectedFile) => {
    setCsvFile(selectedFile);
  };
  const clickHandler = async () => {
    try {
      if (csvFile) {
        const formData = new FormData();
        formData.append("file", csvFile);

        // uploading to firebase
        const csvRef = ref(csvDb, `files/${csvFile.name}`);
        uploadBytes(csvRef, csvFile);

        // hitting the backend server
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
