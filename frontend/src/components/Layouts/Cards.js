import "../../styles/HeaderStyle.css";
import "../../styles/HomeStyle.css";
import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards({ image, name, description, price, available }) {
  console.log(available);
  const [count, setCount] = useState(0);
  console.log(useState);
  const handleAdd = () => {
    
    let tp = setCount(count + 1);
    console.log(tp);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4" class="menu_card">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} alt="Image Loading" />
        </div>

        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="bi bi-heart">
            </div>
          </div>

          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">₹{price}</h5>
            </div>
            <div>
              <Link>
                <i className="justify-content: center bi bi-bag me-2"></i>
                {available!==0 ? "Available" : "Out of Stock"}
              </Link>
              <Link onClick={handleAdd}>
                <i className="justify-content: center bi bi-bag  me-2 bi bi-plus-circle"></i>
              </Link>
              
              <Link onClick={handleSubtract}>
                <i className="justify-content: center bi bi-bag me-2 bi bi-dash-circle"></i>
              </Link>
            </div>
            <div className="add_to_card">

            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
