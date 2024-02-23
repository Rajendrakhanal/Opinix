import "../../styles/components/HistoryList.css"

const HistoryList = ({fileName, lastModifiedDate}) => {
  return (
      <div className="hl-outer-div">{fileName}
          <div>{lastModifiedDate}</div>
      </div>
  )
}

export default HistoryList