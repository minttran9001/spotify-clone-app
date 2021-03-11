import React from 'react'
import './Loading.scss'
import {Loop} from '@material-ui/icons'
export default function Loading() {
    return (
        <div className='loading'>
            <Loop className='loading-icon'/>
        </div>
    )
}
