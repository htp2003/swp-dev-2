import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UsersManage from './UsersManage'; // Import UserManage component
import './Dashboard.css'; // Import CSS file
import Sidebar from './SideBar';

const ADashboard = () => {
    return (

        <div className="admin-dashboard-container">
            <Sidebar />
            <div className="content">
                <Routes>

                    <Route path="/user-manage" element={<UsersManage />} />
                </Routes>
            </div>

        </div>

    );
};

export default ADashboard;
