import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import './Player.scss'
export default function Player() {
    return (
        <div className='player'>
            <div className="player-body">
                <Sidebar/>
                <Body/>
            </div>
            <Footer/>
        </div>
    )
}
