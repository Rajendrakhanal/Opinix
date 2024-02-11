import { useState, useEffect } from "react";
import { csvDb } from "../../firebase/config";
import { listAll, getDownloadURL, ref } from "firebase/storage";
import Loading from "../components/Loading";

const HistoryPage = () => {
  const [csvFiles, setCsvFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCsvFiles = async () => {
      setIsLoading(true);
      try {
        const filesList = await listAll(ref(csvDb, "files"));

        const filesArray = await Promise.all(
          filesList.items.map(async (item) => {
            const downloadURL = await getDownloadURL(item);
            return { name: item.name, downloadURL };
          })
        );
        setCsvFiles(filesArray);
        setIsLoading(false);
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
