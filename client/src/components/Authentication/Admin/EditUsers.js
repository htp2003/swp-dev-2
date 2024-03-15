import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './EditUsers.css'; // Import file CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EditUserForm = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [editedUser, setEditedUser] = useState({
        email: '',
        fullname: '',
        address: '',
        phone: '',
    });

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData) {
            setUser(storedUserData);
            setEditedUser({
                email: storedUserData.email,
                fullname: storedUserData.fullname,
                address: storedUserData.address,
                phone: storedUserData.phone,
            });
        }
    }, []);

    const handleSaveClick = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/update-profile/${userId}`, {
                email: editedUser.email,
                fullname: editedUser.fullname,
                address: editedUser.address,
                phone: editedUser.phone,
            });

            if (response.status === 200) {
                localStorage.setItem('userData', JSON.stringify({
                    ...user,
                    email: editedUser.email,
                    fullname: editedUser.fullname,
                    address: editedUser.address,
                    phone: editedUser.phone,
                }));
                setUser({
                    ...user,
                    email: editedUser.email,
                    fullname: editedUser.fullname,
                    address: editedUser.address,
                    phone: editedUser.phone,
                });

                toast.success('Profile updated successfully');


            } else {
                toast.error('Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Failed to update profile');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({
            ...editedUser,
            [name]: value,
        });
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="edit-profile-container">
                            <Card>
                                <Card.Header className="card-header">
                                    <Card.Title>Chỉnh sửa thông tin của bạn</Card.Title>
                                </Card.Header>
                                <Card.Body className="card-body">
                                    <Form>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control type="email" name="email" value={editedUser.email} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group controlId="formFullname">
                                            <Form.Label>Họ và tên:</Form.Label>
                                            <Form.Control type="text" name="fullname" value={editedUser.fullname} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group controlId="formAddress">
                                            <Form.Label>Địa chỉ:</Form.Label>
                                            <Form.Control type="text" name="address" value={editedUser.address} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Số điện thoại:</Form.Label>
                                            <Form.Control type="text" name="phone" value={editedUser.phone} onChange={handleInputChange} />
                                        </Form.Group>
                                    </Form>
                                    <Button className='save-button' variant="primary" onClick={handleSaveClick}>
                                        Lưu
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

            <ToastContainer />
        </>
    );
};

export default EditUserForm;
