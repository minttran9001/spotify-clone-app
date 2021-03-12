import React from "react";
import Header from "../Header/Header";
import "./Body.scss";
import singer from "../../assets/images/59f4e1659b12d53ec2ca9c67a73772026b2fe7e3.jpg";
import PlayList from "../PlayList/PlayList";
import { useDataPlaylist } from "../../context/PlaylistLayer";
import { getWeeklyPlayList } from "../../actions";
import Loading from "../Loading/Loading";
import test from "../../assets/images/node.png";
import SearchBox from "../SearchBox/SearchBox";
import { MoreHoriz } from "@material-ui/icons";
export default function Body(props) {
  const [{ playlist, isLoading }, dispatch] = useDataPlaylist();

  React.useEffect(() => {
    getWeeklyPlayList(dispatch);
  }, []);
  return (
    <div className="body">
      {isLoading ? (
        <Loading  />
      ) : (
        <>
          <Header user={props.user} userDispatch={props.userDispatch}  />
          <div className="body-info">
            <img
              src={playlist.images.length > 0 ? playlist.images[0].url : test}
              className="album-img"
              alt="album img"
            />
            <div className="album-info">
              <span className="album-type">{playlist.type}</span>
              <h1 className="album-name">{playlist.name}</h1>
              <div className="singer-info">
                <img src={singer} className="singer-img" alt="singer img" />
                <div className="dot"></div>
                <p className="singer-name">{playlist.owner.display_name}</p>
                <div className="dot"></div>
                <span className="total-song">
                  {playlist.tracks.total} songs
                </span>
                <div className="dot"></div>
                <span className="total-time">1hr 43min</span>
              </div>
            </div>
          </div>
          {playlist.tracks.items.length <= 0 ? 
            <div className="playlist-head">
              <MoreHoriz className="icon white" />
            </div>
           : 
            <></>
          }
          {playlist.tracks.items.length > 0 ? (
            <PlayList playlist={playlist.tracks.items} />
          ) : <></>}
            <SearchBox playlistId={playlist.id} />
      
        </>
      )}
    </div>
  );
}
