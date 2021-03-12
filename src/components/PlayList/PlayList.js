import React from "react";
import "./PlayList.scss";
import {
  Alarm,
  PlayCircleFilled,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import moment from "moment";
import { getTrackById, playListMusic } from "../../actions";
import { useDataTrack } from "../../context/TrackLayer";
export default function PlayList({ playlist }) {
  const [{}, dispatch] = useDataTrack();
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  const formatDate = (date) => {
    const newDate = moment(date).format("MMM Do YY");
    return newDate;
  };
  const playATrack = (trackId) => {
    getTrackById(dispatch, trackId);
  };
  const _handlePlaylist = () => {
    getTrackById(dispatch, playlist[0].track.id);
    playListMusic(dispatch)
  };

  return (
    <div className="playlist-box">
      <div className="playlist-head">
        <PlayCircleFilled
          onClick={_handlePlaylist}
          className="icon play-icon"
        />
        <FavoriteBorderOutlined className="icon" />
      </div>
      <table className="playlist-table">
        <thead>
          <tr>
            <td>#</td>
            <td>Title</td>
            <td>Album</td>
            <td>Date Added</td>
            <td>
              <Alarm />
            </td>
          </tr>
        </thead>
        <tbody>
          {playlist.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td
                onClick={() => playATrack(item.track.id)}
                className="flex-col"
              >
                <img src={item.track.album.images[0].url} alt="album img" />
                <div className="info">
                  <span>{item.track.name}</span>
                  <span>{item.track.artists[0].name}</span>
                </div>
              </td>
              <td>{item.track.album.name}</td>
              <td>{formatDate(item.added_at)}</td>
              <td>{formatTime(item.track.duration_ms)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
