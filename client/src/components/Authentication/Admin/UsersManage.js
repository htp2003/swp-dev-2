import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UsersManage.css';
import { useParams } from 'react-router-dom';

const UsersManage = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const { userId } = useParams();

    useEffect(() => {
        fetchUserData();
    }, [userId]);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users'); // Sử dụng đường dẫn tương đối
            setUsers(response.data.users);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('Error fetching user data. Please try again later.');
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            // Kiểm tra nếu user có role là admin thì không cho phép xoá
            const user = users.find(user => user.user_id === userId);
            if (user && user.role === 'Admin') {
                alert('Không thể xoá user có role là admin.');
                return;
            }
            // Gửi request để xoá user
            await axios.delete(`http://localhost:8080/api/users/${userId}`);
            // Cập nhật lại danh sách user sau khi xoá
            fetchUserData();
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Error deleting user. Please try again later.');
        }
    };



    return (
        <div className="user-manage-container">
            <Link to="/" className="btn btn-primary">Trang chính</Link>
            <h2 className="user-manage-heading">Quản lý người dùng</h2>

            {error && <div className="error-message">{error}</div>}

            <table className="user-table">
                <thead>
                    <tr>
                        <th className="user-table-header">Username</th>
                        <th className="user-table-header">Fullname</th>
                        <th className="user-table-header">Address</th>
                        <th className="user-table-header">Phone</th>
                        <th className="user-table-header">Email</th>
                        <th className="user-table-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.user_id} className="user-row">
                            <td className="user-cell">{user.username}</td>
                            <td className="user-cell">{user.fullname}</td>
                            <td className="user-cell">{user.address}</td>
                            <td className="user-cell">{user.phone}</td>
                            <td className="user-cell">{user.email}</td>
                            <td className="user-cell">
                                <Link to={`/user-edit/${user.user_id}`} className="btn btn-success">Sửa</Link>
                                <button className="btn btn-danger" onClick={handleDeleteUser} >Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersManage;