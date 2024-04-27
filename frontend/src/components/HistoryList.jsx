import { FaDownload } from "react-icons/fa6";
import "../../styles/components/HistoryList.css";

const HistoryList = ({ csvFiles }) => {
  return (
    <div className="hl-outer-div">
      <table className="hl-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {csvFiles.map((file, index) => (
            <tr key={index} className={index % 2 === 0 ? "hl-row-even" : "hl-row-odd"}>
              <td className="hl-td">{file.name}</td>
              <td className="hl-td">
                <a href={file.downloadURL} target="_blank" className="hl-anchor">
                  <FaDownload size={25} className="hl-download-icon" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryList;
