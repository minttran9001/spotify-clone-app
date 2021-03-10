import React from 'react'
import './Button.scss'
export default function Button(props) {
    return (
        <button onClick={props.onClick} className='button-green'>
            {props.children}
        </button>
    )
}
