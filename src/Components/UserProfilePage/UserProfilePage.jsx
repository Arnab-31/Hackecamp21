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
    bio: "My Name Is Rock🙂 Mr 🤘Perfect😎 I Love Mom Dad No Attitude I'm Simple🙄",
    link: ["facebook", "twitter", "reddit"],
    visibility: true,
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="user-detail-container">
        <Avatar facebookId="100008343750912" size="150" round={true} />
        <div className="user-detail">
          <span>{defaultData.username}</span>
          <span>{defaultData.name}</span>
          <span>{defaultData.bio}</span>
          <span>
            {defaultData.link.map((link) => {
              return <a href="#">{link}</a>;
            })}
          </span>
          <span>
            <button className="user-btn">Follow</button>
            <button className="user-btn">Message</button>
          </span>
        </div>
      </div>
      <div className="user-media">
        <div className="media-options">
          <span>
            <PhotoLibraryIcon onClick={() => setValue(true)} />
            <VideoLibraryIcon onClick={() => setValue(false)} />
          </span>
        </div>
        <div className="media-container">
          {value ? <PostGrid /> : <VidGrid />}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
