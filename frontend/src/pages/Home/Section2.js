import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Original from "../../assets/about/Original.png";
import Tiffin from "../../assets/about/Tiffin.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Original,
    title: "Home Made",
    paragraph: `Savor the warmth and comfort of home with our Homemade Specialties: meticulously crafted dishes prepared with love and care in our kitchen, just like grandma used to make. From hearty vegetable biryani to creamy paneer butter masala, each bite evokes nostalgia and satisfaction, delivering a taste of home that's simply unmatched.`,
  },
  {
    image: Tiffin,
    title: "Qualty Foods",
    paragraph: `Experience the taste of home with our Signature Tiffin: a balanced and nutritious meal featuring aromatic vegetable biryani, tender paneer butter masala, comforting dal tadka, and a fresh mixed vegetable sabzi, all prepared with high-quality ingredients and authentic spices to deliver a wholesome, delicious dining experience right to your doorstep.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Indulge in our Express Tiffin for a swift yet satisfying dining experience. Featuring aromatic vegetable biryani, creamy paneer butter masala, comforting dal tadka, and fresh mixed vegetable sabzi, our fast delivery ensures you enjoy a wholesome and delicious meal, delivered promptly to your doorstep without compromising on quality or taste.`,
  },

];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>DON'T MISS
                FAMILY FOOD
                WITH OUR
                TIFFIN SERVICE</h2>
              <p>
                Enjoy delicious, home-cooked meals delivered right to your doorstep. Our tiffin service brings the comfort and taste of homemade food, ensuring you never miss a moment with your loved ones. Perfect for busy schedules, our convenient and nutritious meals make family time even more special. Savor the flavors and cherish the moments together!
              </p>
              <Link to="/fullmenu" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
