import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">Company <span style={{color: '#FF5500' }}>logo</span></a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                 <li><a href="/">Solutions</a></li>
                <li><a href="/">Blog</a></li>
                 <li><a href="/">Dropdown </a></li>
               
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
