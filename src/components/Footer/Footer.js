import React from "react";
import "./Footer.scss";
import tempImg from "../../assets/images/Spotify_Logo_CMYK_Black.png";
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
  PlaylistPlay,
} from "@material-ui/icons";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={tempImg} alt="music thumbnail" className="thumbnail" />
        <div className="music-glance">
          <h1>Still with you</h1>
          <p>Jungkook BTS</p>
        </div>
        <FavoriteBorderOutlined className="footer-icon" />
        <BrandingWatermarkOutlined className="footer-icon" />
      </div>
      <div className="footer-center">
        <div className="control-tab">
          <Shuffle className="control-icon green" />
          <SkipPrevious className="control-icon" />
          <PlayCircleOutline className="control-icon play" />
          <SkipNext className="control-icon" />
          <Repeat className="control-icon" />
        </div>
        <div className="track-slider-wrap">
          <span>0:00</span>
          <div className="track-slider">
            <div className="track-duration">
              <div className="track-point"></div>
            </div>
          </div>
          <span>0:00</span>
        </div>
      </div>
      <div className="footer-right">
          <Mic className="footer-icon" />
          <PlaylistPlay className="footer-icon"/>
          <SpeakerGroup className="footer-icon"/>
        <div className="volume-slider">
        <VolumeUp className='footer-icon'/>
          <div className="track-slider">
            <div className="track-duration">
              <div className="track-point"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
