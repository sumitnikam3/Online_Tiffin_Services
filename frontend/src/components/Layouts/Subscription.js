import React, { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import "../../styles/HeaderStyle.css";
import "../../styles/HomeStyle.css";

function Subscription() {
    const [subscriptionType, setSubscriptionType] = useState(null);

    const handleYearlySubscribe = () => {
        setSubscriptionType('yearly');
    };

    const handleMonthlySubscribe = () => {
        setSubscriptionType('monthly');
    };

    return (
        <Container id="subscription" className="my-5">
            <h2 className="text-center mb-4">Choose Your Subscription Plan</h2>
            <Row className="justify-content-center">
                <Col sm={8} md={6} lg={4}>
                    <Card className="mb-4">
                        <Card.Body className="text-center">
                            <Card.Title>Monthly Subscription</Card.Title>
                            <Card.Text>
                                <h3>₹5000 / month</h3>
                                <p>Subscribe for a month of delicious tiffin service.</p>
                            </Card.Text>
                            <Button variant="primary" onClick={handleMonthlySubscribe}>
                                <i className="bi bi-calendar"></i> Subscribe Monthly
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={8} md={6} lg={4}>
                    <Card className="mb-4">
                        <Card.Body className="text-center">
                            <Card.Title>Yearly Subscription</Card.Title>
                            <Card.Text>
                                <h3>₹25000 / year</h3>
                                <p>Subscribe for a year of delicious tiffin service.</p>
                            </Card.Text>
                            <Button variant="primary" onClick={handleYearlySubscribe}>
                                <i className="bi bi-calendar-check"></i> Subscribe Yearly
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {subscriptionType && (
                <Row className="justify-content-center">
                    <Col sm={8} md={6} lg={4}>
                        <h4 className="text-center">
                            Thanks for subscribing {subscriptionType === 'yearly' ? 'Yearly' : 'Monthly'}!
                        </h4>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default Subscription;
