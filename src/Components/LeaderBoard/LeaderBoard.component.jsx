import { useState } from "react";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import "./LeaderBoard.styles.css";
const LeaderBoard = () => {
  const [type, setType] = useState("likes");
  const [tableData, setTableData] = useState([
    { name: "aditya", coverage: 54, likes: 410 },
    { name: "aditya", coverage: 51, likes: 450 },
    { name: "aditya", coverage: 51, likes: 420 },
    { name: "aditya", coverage: 40, likes: 402 },
    { name: "aditya", coverage: 30, likes: 4320 },
    { name: "aditya", coverage: 20, likes: 406 },
    { name: "aditya", coverage: 10, likes: 40 },
    { name: "aditya", coverage: 5, likes: 40 },
  ]);
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

  const setByType = () => {
    console.log(type);
    const data = tableData.sort(GetSortOrder());
    return data;
  };

  return (
    <div style={{ marginTop: "100px" }} className="leader-board-container">
      <div className="leader-board-title">
        <p>Leader Board</p>
        <SportsScoreIcon sx={{ fontSize: 30 }} />
      </div>
      <div className="leader-board-option">
        <span className="option-tiles">Order By:</span>
        <span
          className={
            type === "coverage"
              ? "option-tiles option-click "
              : "option-tiles option-click active-order"
          }
          onClick={() => {
            setType("likes");
            setTableData(setByType());
          }}
        >
          Coverage
        </span>
        <span
          className={
            type === "likes"
              ? "option-tiles option-click "
              : "option-tiles option-click active-order"
          }
          onClick={() => {
            setType("coverage");
            setTableData(setByType());
          }}
        >
          Likes
        </span>
      </div>
      <div className="leader-board-data">
        <table className="leader-board-table">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Coverage (%)</th>
            <th>Likes (#)</th>
          </tr>
          {tableData.map((row, i) => {
            return (
              <tr className="leader-board-row">
                <td
                  className="row-tiles"
                  style={
                    i % 2 === 0
                      ? { backgroundColor: "#ff3f6c", color: "white" }
                      : { backgroundColor: "white" }
                  }
                >
                  {i + 1}
                </td>
                <td
                  className="row-tiles"
                  style={
                    i % 2 === 0
                      ? { backgroundColor: "#ff3f6c", color: "white" }
                      : { backgroundColor: "white" }
                  }
                >
                  {row.name}
                </td>
                <td
                  className="row-tiles"
                  style={
                    i % 2 === 0
                      ? { backgroundColor: "#ff3f6c", color: "white" }
                      : { backgroundColor: "white" }
                  }
                >
                  {row.coverage}
                </td>
                <td
                  className="row-tiles"
                  style={
                    i % 2 === 0
                      ? { backgroundColor: "#ff3f6c" }
                      : { backgroundColor: "white" }
                  }
                >
                  {row.likes}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default LeaderBoard;
