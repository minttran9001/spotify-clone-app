import React from 'react'
import './SearchRow.scss'
export default function SearchRow({item,onClick}) {
    const addToPlayList = ()=>{

    }
    return (
        <div onClick={onClick} className='search-row'>
            <div className="search-info">
                <img className='song-img' src={item.album.images[0].url} alt=""/>
                <div className="search-detail">
                    <p>{item.name}</p>
                    <span>{item.artists[0].name}</span>
                </div>
            </div>
            <div className="search-album">
                <p>{item.album.name}</p>
            </div>
            <div className="search-widget">
                <button onClick={addToPlayList}>ADD</button>
            </div>
        </div>
    )
}
