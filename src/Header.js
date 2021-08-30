import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { HeaderOption } from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <div className="header">
            {/* LEFT HEADER */}
            <div className="header-left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <div className="header-search">
                    {/* SEARCH ICON */}
                    <SearchIcon/>
                    <input type="text" />
                </div>

            </div>
            {/* RIGHT HEADER */}
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="profile.jpg" title="me"/>
            </div>
            
        </div>
    )
}

export default Header