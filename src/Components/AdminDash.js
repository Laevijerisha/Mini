import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ViewRequests from './AdminComponents/ViewRequests';
import ManageCenters from './AdminComponents/ManageCenters';
import './UserDash.css';

const AdminDash = () => {
    const [showSideNav, setShowSideNav] = useState(false);
    const [activePage, setActivePage] = useState('viewRequests');

    const toggleSideNav = () => {
        setShowSideNav(!showSideNav);
    };

    const handlePageChange = (page) => {
        setActivePage(page);
        setShowSideNav(false); // Close side nav after selecting a page
    };

    return (
        <div className="admin-dashboard">
            <div className="top-nav">
                <button className="menu-btn" onClick={toggleSideNav}>
                    Menu
                </button>
                <div className="user-info">
                    <span>Welcome, Admin</span>
                    <NavLink to='/'>
                        <button className='logout-btn' onClick={() => alert('Logout')}>Logout</button>
                    </NavLink>
                </div>
            </div>
            
            <div className={`side-nav ${showSideNav ? 'open' : ''}`}>
                <ul>
                    <li className={activePage === 'viewRequests' ? 'active' : ''} onClick={() => handlePageChange('viewRequests')}>View Requests</li>
                    <li className={activePage === 'manageCenters' ? 'active' : ''} onClick={() => handlePageChange('manageCenters')}>Manage Centers</li>
                </ul>
            </div>
            <div className="main-content">
                {/* Render different components based on the activePage state */}
                {activePage === 'viewRequests' && <ViewRequests />}
                {activePage === 'manageCenters' && <ManageCenters />}
            </div>
        </div>
    );
}

export default AdminDash;
