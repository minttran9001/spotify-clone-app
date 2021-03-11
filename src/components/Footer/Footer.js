import React from "react";
import "./Footer.scss";
import tempImg from "../../assets/images/59f4e1659b12d53ec2ca9c67a73772026b2fe7e3.jpg";
import {
  FavoriteBorderOutlined,
  Shuffle,
  SkipNext,
  SkipPrevious,
  PlayCircleOutline,
  Repeat,
  BrandingWatermarkOutlined,
  Mic,
  SpeakerGroup,
  VolumeUp,
  VolumeMute,
  PlaylistPlay,
  Pause,
} from "@material-ui/icons";
import { useDataTrack } from "../../context/TrackLayer";
import { pauseTrack, playTrack, stopTrack } from "../../actions";
export default function Footer() {
  const [
    { playingTrack, trackState, isTrackLoading },
    dispatch,
  ] = useDataTrack();
  const [time, setTime] = React.useState({
    duration: 0,
    current: 0,
  });
  const [vol, setVol] = React.useState(1);
  const audio = document.getElementById("audio");
  React.useEffect(() => {
    if (audio != null) {
      audio.addEventListener("timeupdate", () => {
        if (audio.readyState > 0) {
          setTime({
            current: Math.round(audio.currentTime),
            duration: Math.round(audio.duration),
          });
        }
        if (Math.round(audio.currentTime) === Math.round(audio.duration)) {
          stopTrack(dispatch);
        }
      });
    }
  }, [audio]);
  React.useEffect(() => {
    setTime({
      duration: 0,
      current: 0,
    });
  }, [playingTrack]);

  const handlePlayTrack = () => {
    playTrack(dispatch);

    audio.play();
  };
  const handlePauseTrack = () => {
    pauseTrack(dispatch);
    audio.pause();
  };
  const formatTime = (time) => {
    const minutes = "0" + Math.floor(time / 60);
    const seconds = "0" + (time - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
  };
  const onInputSlide = (e) => {
    if (time.duration !== 0) {
      const swipeTime = time.duration * (e.target.value / 100);
      audio.currentTime = swipeTime;
    }
  };
  const onInputVolume = (e) => {
    audio.volume = Math.round(e.target.value) / 100;
    setVol(Math.round(e.target.value) / 100);
  };
  const muteVolume = () => {
    if (vol !== 0) {
      audio.volume = 0;
      setVol(0);
    } else {
      audio.volume = 1;
      setVol(1);
    }
  };
  return (
    <div className="footer">
      <audio
        id="audio"
        className="hidden-audio"
        src={isTrackLoading ? null : playingTrack.preview_url}
      ></audio>
      <div className="footer-left">
        {isTrackLoading ? (
          <></>
        ) : (
          <img
            src={playingTrack.album.images[0].url}
            alt="music thumbnail"
            className="thumbnail"
          />
        )}

        <div className="music-glance">
          <h1>{isTrackLoading ? "" : playingTrack.name}</h1>
          <p>{isTrackLoading ? "" : playingTrack.artists[0].name}</p>
        </div>
        <div className="footer-left-icon">
          <FavoriteBorderOutlined className="footer-icon" />
          <BrandingWatermarkOutlined className="footer-icon" />
        </div>
      </div>
      <div className="footer-center">
        <div className="control-tab">
          <Shuffle className="control-icon green" />
          <SkipPrevious className="control-icon" />
          {trackState === "playing" ? (
            <Pause onClick={handlePauseTrack} className="control-icon play" />
          ) : (
            <PlayCircleOutline
              onClick={() => {
                !isTrackLoading ? handlePlayTrack() : console.log("Select a song");
              }}
              className="control-icon play"
            />
          )}
          <SkipNext className="control-icon" />
          <Repeat className="control-icon" />
        </div>
        <div className="track-slider-wrap">
          <span>{formatTime(time.current)}</span>
          <div className="track-slider">
            <input
              onInput={(e) => onInputSlide(e)}
              className="range-input"
              id="range-input"
              type="range"
              min="range"
              value={time.current}
              max="100"
            />
            <div
              style={{
                width:
                  time.current === 0
                    ? "0%"
                    : (time.current / time.duration) * 100 + "%",
              }}
              className="track-duration"
            >
              <div className="track-point"></div>
            </div>
          </div>
          <span>{formatTime(time.duration)}</span>
        </div>
      </div>
      <div className="footer-right">
        <Mic className="footer-icon" />
        <PlaylistPlay className="footer-icon" />
        <SpeakerGroup className="footer-icon" />
        <div className="volume-slider">
          {vol >= 0.1 ? (
            <VolumeUp onClick={muteVolume} className="footer-icon" />
          ) : (
            <VolumeMute onClick={muteVolume} className="footer-icon" />
          )}
          <div className="track-slider">
            <input
              onInput={(e) => onInputVolume(e)}
              className="range-input"
              id="range-input"
              type="range"
              min="range"
              value={vol}
              max="100"
            />
            <div
              style={{
                width: vol * 100 + "%",
              }}
              className="track-duration"
            >
              <div className="track-point"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
