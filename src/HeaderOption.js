import React from 'react'
import './HeaderOption.css'
import {Avatar } from '@material-ui/core'

export const HeaderOption = ({avatar,Icon,title}) => {
    return (
        <div className="header-option">
            {Icon && <Icon className="headerOption-icon"/>}
            {avatar && <Avatar className="headerOption-icon" src={avatar}/>}
            <h3 className="headerOption-title">{title}</h3>
            
        </div>
    )
}
