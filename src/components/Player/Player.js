import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import './Player.scss'
export default function Player(props) {
    return (
        <div className='player'>
            <div className="player-body">
                <Sidebar/>
                <Body user={props.user} userDispatch={props.userDispatch} />
            </div>
            <Footer/>
        </div>
    )
}
