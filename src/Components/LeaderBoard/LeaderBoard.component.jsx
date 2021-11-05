import { useEffect, useState } from "react";
import "./LeaderBoard.styles.css";
const LeaderBoard = () => {
  const [type, setType] = useState("coverage");
  const [tableData, setTableData] = useState([
    { name: "aditya", coverage: 50, likes: 40 },
    { name: "aditya", coverage: 510, likes: 40},
    { name: "aditya", coverage: 530, likes: 4320 },
    { name: "aditya", coverage: 5102, likes: 420 },
    { name: "aditya", coverage: 540, likes: 402 },
    { name: "aditya", coverage: 5120, likes: 450 },
    { name: "aditya", coverage: 5450, likes: 410 },
    { name: "aditya", coverage: 520, likes: 406 },
  ])
  const GetSortOrder = () => {
    return function (a, b) {
      if (a[type] < b[type]) {
        return 1;
      } else if (a[type] > b[type]) {
        return -1;
      }
      return 0;
    };
  };
  const displayRows = () =>{
      return tableData.map((row) => {
                return (
                  <tr className="leader-baord-row">
                    <td className="row-tiles">{row.name}</td>
                    <td className="row-tiles">{row.coverage}</td>
                    <td className="row-tiles">{row.likes}</td>
                  </tr>
                );
              })
  }
  const setByType = () => {
    console.log(type);
    const data = tableData.sort(GetSortOrder());
    return data;
  };
  useEffect(() => {
    setTableData(setByType());
    console.log(tableData)
  }, [type]);
  const data = [
    { name: "aditya", coverage: 50, likes: 40 },
    { name: "aditya", coverage: 510, likes: 40},
    { name: "aditya", coverage: 530, likes: 4320 },
    { name: "aditya", coverage: 5102, likes: 420 },
    { name: "aditya", coverage: 540, likes: 402 },
    { name: "aditya", coverage: 5120, likes: 450 },
    { name: "aditya", coverage: 5450, likes: 410 },
    { name: "aditya", coverage: 520, likes: 406 },
  ];
  return (
    <div style={{ marginTop: "100px" }} className="leader-board-container">
      <div className="leader-baord-title">LeaderBoard</div>
      <div className="leader-board-option">
        <span className="option-tab">
          Order By:
          <span onClick={() => setType("likes")}>Coverage</span>
          <span onClick={() => setType("coverage")}>Likes</span>
        </span>
      </div>
      <div className="leader-board-data">
        <table className="leader-board-table">
          <tr>
          <th>Rank</th>
            <th>Name</th>
            <th>Coverage</th>
            <th>Likes</th>
          </tr>
          {tableData.map((row,i) => {
            return (
              <tr className="leader-baord-row">
              <td>{i+1}</td>
                <td className="row-tiles">{row.name}</td>
                <td className="row-tiles">{row.coverage}</td>
                <td className="row-tiles">{row.likes}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default LeaderBoard;
