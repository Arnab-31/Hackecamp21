import { useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "react-avatar";

import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

import "./UserProfilePage.styles.css";
import PostGrid from "./../PostGrid/PostGrid.component";
import VidGrid from "../VidGrid/VidGrid.comonent";

const UserProfilePage = ({ props }) => {
  const [value, setValue] = useState(true);

  const { username } = useParams();
  const defaultData = {
    username: "shooter@007",
    name: "Shooter Walia",
    bio: "My Name Is Rock🙂 Mr 🤘Perfect😎 No Attitude I'm Simple🙄",
    link: ["facebook", "twitter", "reddit"],
    visibility: true,
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="user-detail-container">
        <Avatar facebookId="100008343750912" size="150" round={true} />
        <div className="user-detail">
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>
            {defaultData.username}
          </span>
          <span className="user-stats">
            <span>
              <span style={{ fontWeight: "bold", fontSize: "30px" }}>100</span>
              <span>Posts</span>
            </span>
            <span>
              <span style={{ fontWeight: "bold", fontSize: "30px" }}>100</span>
              <span>Followers</span>
            </span>
            <span>
              <span style={{ fontWeight: "bold", fontSize: "30px" }}>100</span>
              <span>Following</span>
            </span>
          </span>

          <span>{defaultData.name}</span>

          <span>{defaultData.bio}</span>

          <span>
            <button className="user-btn">Follow</button>
            <button className="user-btn">Message</button>
          </span>
        </div>
      </div>
      <div className="user-media">
        <div className="media-options">
          <span>
            <span className={value ? "active-option" : " "}>
              <PhotoLibraryIcon
                sx={{ fontSize: 30 }}
                onClick={() => setValue(true)}
                style={{ cursor: "pointer" }}
              />
            </span>
            <hr
              style={{ width: "1px", height: "40px", backgroundColor: "black" }}
            />
            <span className={value ? "" : "active-option"}>
              <VideoLibraryIcon
                sx={{ fontSize: 30 }}
                onClick={() => setValue(false)}
              />
            </span>
          </span>
        </div>
        <div className="media-container">
          {value ? <PostGrid username={username} /> : <VidGrid />}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
