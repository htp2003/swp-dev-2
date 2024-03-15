// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">

            <Link to="/admin/user-manage">User Manage</Link>

        </div>
    );
};

export default Sidebar;
