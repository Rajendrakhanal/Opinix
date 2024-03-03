import React, { useState, useEffect } from "react";
import FileInput from "../components/FileInput";
import { useAnalyzeDataMutation } from "../slices/analyzeApiSlice";
import Loading from "../components/Loading";
import "../../styles/pages/AnalyzePage.css";
import Analytics from "../components/Analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { MdUploadFile } from "react-icons/md";
import Scraper from "../components/Scraper";

const AnalyzePage = () => {
  const [analyzeData, { isLoading }] = useAnalyzeDataMutation();
  const [csvFile, setCsvFile] = useState();
  const [comments, setComments] = useState();
  const [keywords, setKeywords] = useState();
  const [sentimentByTopics, setSentimentByTopics] = useState();
  const [sentimentOverTime, setSentimentOverTime] = useState();
  const [analysisDone, setAnalysisDone] = useState(false);
  const [hideTop, setHideTop] = useState(false);

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
        setHideTop(true);
        const formData = new FormData();
        formData.append("file", csvFile);

        // uploading to firebase
        const user = getAuth().currentUser;
        const csvRef = ref(csvDb, `files/${user.uid}/${csvFile.name}`);
        uploadBytes(csvRef, csvFile);

        // hitting the backend server
        const res = await analyzeData(formData).unwrap();
        const parsedData = JSON.parse(res);
        // console.log(parsedData);
        setComments(parsedData.comments);
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
    <>
      <div className={hideTop ? "ap-hide-top" : ""}>
        <div className="title-container">
          <h1>Upload your data</h1>
          <p>It takes just a few seconds to get started</p>
        </div>
        <div className="upload-container">
          <h3>Step 1: Upload your data</h3>
          <p>We take .csv files.</p>
          <label className="upload-button">
            <MdUploadFile size={30} />
            <FileInput onFileChange={handleFileChange} />
          </label>
          <Scraper />
        </div>
        <div className="analyze-container">
          <h3>Step 2: Analyze your data</h3>
          <span className="button">Keyword Extraction</span>
          <span className="button">Sentiment By Topics</span>
          <span className="button">Sentiment Over Time</span>
          <div>
            <button
              className="button start"
              onClick={clickHandler}
              disabled={isLoading ? true : false}
            >
              Start analysis
            </button>
          </div>
        </div>
      </div>
      <div className="apLoadingDiv">{isLoading && <Loading />}</div>
      {analysisDone && !isLoading && (
        <Analytics
          comments={comments}
          keywords={keywords}
          sentimentByTopics={sentimentByTopics}
          sentimentOverTime={sentimentOverTime}
        />
      )}
    </>
  );
};

export default AnalyzePage;
