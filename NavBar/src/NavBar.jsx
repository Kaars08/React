import React from 'react';
import logo from './images/logo.png';
import {Link} from "react-router-dom";
export default function NavBar() {
    return (
        <nav className='nav'>
            <img src={logo} alt='Logo' />
            <li><Link to='/CorporateClients' className='page1'>Corporate Clients</Link></li>
            <li><Link to='/Vendor' className='page1'>Vendor</Link></li>
            <li><Link to='/OurStory' className='page1'>Our Story</Link></li>
        </nav>
    );
}
