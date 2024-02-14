import { useState, useEffect } from "react";
import { getStorage } from "firebase/storage";
import { app } from "../../firebase/config";
import { listAll, getDownloadURL, ref } from "firebase/storage";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HistoryPage = () => {
  const [csvFiles, setCsvFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    const fetchCsvFiles = async () => {
      setIsLoading(true);
      try {
        const user = getAuth().currentUser;
        if (user) {
          const filesList = await listAll(ref(csvDb, `files/${user.uid}`));
          const filesArray = await Promise.all(
            filesList.items.map(async (item) => {
              const downloadURL = await getDownloadURL(item);
              return { name: item.name, downloadURL };
            })
          );
          setCsvFiles(filesArray);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching CSV files: ", error);
      }
    };

    fetchCsvFiles();
  }, []);

  return (
    <div>
      <h1>CSV Files History</h1>
      <ul>
        {isLoading ? (
          <Loading />
        ) : csvFiles.length === 0 ? (
          <p>No files have been analyzed</p>
        ) : (
          csvFiles.map((file, index) => (
            <li key={index}>
              <a
                href={file.downloadURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.name}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default HistoryPage;
