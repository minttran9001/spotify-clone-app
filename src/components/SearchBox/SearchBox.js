import React from "react";
import "./SearchBox.scss";
import { Search } from "@material-ui/icons";
import SearchRow from "../SearchRow/SearchRow";
import { addTrackToPlaylist, getTrackById, searchTrack } from "../../actions";
import { useDataSearchList } from "../../context/SearchListLayer";
import { useDataTrack } from "../../context/TrackLayer";
import { useDataPlaylist } from "../../context/PlaylistLayer";
export default function SearchBox({playlistId}) {
  const [{ searchList, isLoading }, dispatch] = useDataSearchList();
  const [{}, trackDispatch] = useDataTrack();
  const [{},dispatchPl] = useDataPlaylist()

  const _handleOnSearchTrack = (e) => {
    searchTrack(dispatch, e.target.value);
  };
  const _getTrackById = (trackId) => {
    getTrackById(trackDispatch, trackId);
  };
  const _addToPlayList = (item)=>{
    addTrackToPlaylist(dispatchPl,item,playlistId)
}
  return (
    <div className="search">
      <div className="search-box">
        <h1 className="search-title">Let's find something for your playlist</h1>
        <div className="search-input-group">
          <Search className="search-icon" />
          <input
            onChange={(e) => _handleOnSearchTrack(e)}
            type="text"
            placeholder="Search for songs or episodes"
          />
        </div>
        <div className="search-list">
          {!isLoading ? (
            searchList.items.map((item, index) => (
              <SearchRow
                onClick={() => _getTrackById(item.id)}
                key={index}
                item={item}
                playlistId={playlistId}
                addToPlayList={()=>_addToPlayList(item)}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
