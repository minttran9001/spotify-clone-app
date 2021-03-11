import React from "react";
import "./SearchBox.scss";
import { MoreHoriz, Search } from "@material-ui/icons";
import SearchRow from "../SearchRow/SearchRow";
import { getTrackById, searchTrack } from "../../actions";
import {useDataSearchList} from '../../context/SearchListLayer'
import { useDataTrack } from "../../context/TrackLayer";
export default function SearchBox() {
    const [{searchList,isLoading},dispatch] = useDataSearchList()
    const [{}, trackDispatch] = useDataTrack();

    const _handleOnSearchTrack = (e)=>{
        searchTrack(dispatch,e.target.value)
    }
    const _getTrackById = (trackId)=>{
      getTrackById(trackDispatch, trackId);

    }
  return (
    <div className="search">
      <div className="playlist-head">
        <MoreHoriz className="icon white" />
      </div>
      <div className="search-box">
        <h1 className="search-title">Let's find something for your playlist</h1>
        <div className="search-input-group">
          <Search className="search-icon" />
          <input onChange={(e)=>_handleOnSearchTrack(e)} type="text" placeholder="Search for songs or episodes" />
        </div>
        <div className="search-list">
            {
              !isLoading ? searchList.items.map((item,index)=>(
                <SearchRow onClick={()=>_getTrackById(item.id)} key={index} item={item}/>
              )) : <></>
            }
        </div>
      </div>
    </div>
  );
}
