import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/images/Spotify_Logo_CMYK_White.png";
import SideOption from "../SideOption/SideOption";
import { Home, Search, LibraryMusic, Add, Favorite } from "@material-ui/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="Spotify Logo" className="sidebar-logo" />
      <SideOption Icon={Home} title="Home" />
      <SideOption Icon={Search} title="Search" />
      <SideOption Icon={LibraryMusic} title="Your Library" />
      <div className="playlist-box">
        <p className="playlist-title">Playlists</p>
        <SideOption background={"#B2B2B2"} Icon={Add} title="Create Playlist" />
        <SideOption
          background={"#6566A0"}
          Icon={Favorite}
          title="Liked Songs"
        />
      </div>
      <div className="playlist-wrap">
          <SideOption font="light" title="My Playlist 1#" />
          <SideOption font="light" title="My Playlist 2#" />
          <SideOption font="light" title="My Playlist 3#" />
          <SideOption font="light" title="My Playlist 4#" />
          <SideOption font="light" title="My Playlist 5#" />
          <SideOption font="light" title="My Playlist 6#" />
          <SideOption font="light" title="My Playlist 7#" />
          <SideOption font="light" title="My Playlist 7#" />
          <SideOption font="light" title="My Playlist 7#" />
          <SideOption font="light" title="My Playlist 7#" />

          </div>
    </div>
  );
}
