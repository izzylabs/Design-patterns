import React from 'react';
import './Header.css'; 
import logo from '../Logo/logo.svg'; 

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Task and Product Management System</h1>
            </div>
        </header>
    );
};

export default Header;