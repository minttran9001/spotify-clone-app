import React from "react";
import "./Header.scss";
import Mint from "../../assets/images/Mint.png";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  PlayCircleFilled,
  KeyboardArrowDown,
  Launch,
} from "@material-ui/icons";
import { useDataTrack } from "../../context/TrackLayer";
export default function Header() {
  const [dropdown, setDropdown] = React.useState(false);
  const [{ playingTrack, isTrackLoading }] = useDataTrack();
  const toggleDropDown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="header">
      <div className="header-left">
        <div className="navigate-button">
          <KeyboardArrowLeft className="navigate-icon" />
          <KeyboardArrowRight className="navigate-icon" />
        </div>
        <div className="playing-info">
          <PlayCircleFilled className="play-icon" />
          <p>
            {isTrackLoading ? "" : playingTrack.name} -{" "}
            {isTrackLoading ? "" : playingTrack.artists[0].name}
          </p>
        </div>
      </div>
      <div className="header-right">
        <button className="upgrade-button">UPGRADE</button>
        <div className="user-widget">
          <div onClick={() => toggleDropDown()} className="user-info">
            <img src={Mint} alt="user avatar" />
            <span>Mint</span>
            <KeyboardArrowDown className="user-arrow" />
          </div>
          <div
            className={!dropdown ? "user-dropdown" : "user-dropdown is-active"}
          >
            <a href="/account">
              Account
              <Launch className="user-link" />
            </a>
            <a href="/account">Profile</a>
            <button>Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
