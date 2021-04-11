import React, { useState } from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom'
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const SideMenu = () => {
    const [ modal, setModal ] = useState(false)
    return (
        <div className="sidenav">
                <div className="sidenav-header">
                    <LaptopMacIcon style={{ fontSize: 30, marginLeft: 5 }} />
                    <p>Trac Mobility</p>
                </div>
            <Link className='sidenav-header-dash' to='/'>KPI Dashboard</Link>
            <Link to='/map'>Map</Link>
            <div>
            <Link onClick={() => setModal(!modal)}>
                <div className='sidenav-header-dropdown'>
                    <p>Vehicle Information</p>
                    <div>
                        {modal ? <ArrowDropUpIcon  style={{ height: '100%' }} /> : <ArrowDropDownIcon style={{ height: '100%' }} />}
                    </div>
                </div>
            </Link>
            {
                modal && (
                <div className='sidenav-header-modal'>
                    <Link to='/'>Dashboard</Link>
                    <Link to='/map'>Map</Link>
                </div>
                )
            }

            </div>
        </div>
    )
}

export default SideMenu
