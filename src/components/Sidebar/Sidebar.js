import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/images/Spotify_Logo_CMYK_White.png";
import SideOption from "../SideOption/SideOption";
import { Home, Search, LibraryMusic, Add, Favorite } from "@material-ui/icons";
import {useDataPlaylist} from '../../context/PlaylistLayer'
import { createUserPlaylist, selectPlaylist } from "../../actions";
export default function Sidebar() {
  const [{userPlayLists},dispatch] = useDataPlaylist()
  const _createPlayList = ()=>{
    createUserPlaylist(dispatch)
  }
  const _selectPlaylist = (id)=>{
    selectPlaylist(dispatch,id)
  }
  return (
    <div className="sidebar">
      <img src={logo} alt="Spotify Logo" className="sidebar-logo" />
      <SideOption Icon={Home} title="Home" />
      <SideOption Icon={Search} title="Search" />
      <SideOption Icon={LibraryMusic} title="Your Library" />
      <div className="playlist-box">
        <p className="playlist-title">Playlists</p>
        <SideOption onClick={_createPlayList} background={"#B2B2B2"} Icon={Add} title="Create Playlist" />
        <SideOption
          background={"#6566A0"}
          Icon={Favorite}
          title="Liked Songs"
        />
      </div>
      <div className="playlist-wrap">
          {
            userPlayLists.length > 0 ?  userPlayLists.map((item,index)=>(
              <SideOption onClick={()=>_selectPlaylist(item.id)} key={index} font="light" title={item.name} />
            )) :
            <SideOption font="light" title="Create your first playlist" />
          }
          </div>
    </div>
  );
}
