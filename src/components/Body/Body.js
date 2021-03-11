import React from "react";
import Header from "../Header/Header";
import "./Body.scss";
import singer from "../../assets/images/59f4e1659b12d53ec2ca9c67a73772026b2fe7e3.jpg";
import PlayList from "../PlayList/PlayList";
import { useDataPlaylist } from "../../context/PlaylistLayer";
import { getPlayList } from "../../actions";
import Loading from "../Loading/Loading";
export default function Body() {
  const [{ playlist, isLoading }, dispatch] = useDataPlaylist();
  React.useEffect(() => {
    getPlayList(dispatch);
  }, []);
  return (
    <div className="body">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div className="body-info">
            <img
              src={playlist.images[0].url}
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
          <PlayList playlist={playlist.tracks.items} />
        </div>
      )}
    </div>
  );
}
