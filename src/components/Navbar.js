import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import Profile from '../assets/one-profile.png';

const Navbar = () => {
    return (
        <div className="topnav">
            <div className='topnav-search'>
                <input type="text" placeholder="Search.." />
                <SearchIcon className='topnav-search-icon' />
            </div>
            <div className='topnav-right'>
                    <NotificationsIcon className='topnav-right-pad' />
                    <EmailIcon className='topnav-right-pad'/>
                    <p className='topnav-right-pad'>Jack</p> 
                    <img className='topnav-right-pad' src={Profile} />
            </div>
        </div>
    )
}

export default Navbar
