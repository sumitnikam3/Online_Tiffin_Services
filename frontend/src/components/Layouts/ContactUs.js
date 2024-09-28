import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:7400/api/contact', formData);
            alert('Message sent successfully');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.log(error);
            console.error('Error sending message:', error);
            alert('Failed to send message');
        }
    };
    

    return (
        <div className="aboutUs">
            <Container className='mt-5 mb-3'>
                <h1 className="my-4">Contact Us</h1>
                <section>
                    <h2 className="h4 mb-3">Send Us a Message</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Last Name:</Form.Label>
                                    <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} />
                        </Form.Group>
                        <Button type="submit" variant="primary" onClick={handleSubmit}>Submit</Button>
                    </Form>
                </section>
            </Container>
        </div>
    );
};

export default ContactUs;
