import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
            <h1 className='title'>Make <span style={{color:'orange'}}>Van Helsing</span> movie</h1>
            <h4>Van Helsing is a 2004 action gothic horror film written and directed by Stephen Sommers.</h4>
            <h1>TOTAL BUDGET : <span style={{color:'orange'}}>$160 MILLION</span></h1>
            </div>
        </div>
    );
};

export default Header;