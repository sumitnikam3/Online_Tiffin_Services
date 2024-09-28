import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import axios from 'axios';
import Cards from "../../components/Layouts/Cards";
import Layout from "../../components/Layouts/Layout";

function Section3() {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await axios.get('http://localhost:7400/api/food/list');
        const data = response.data;
        setFoodData(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchFoodData();
  }, []);

  return (
    <section className="menu_section">
      <Container>
        <Row>
          {foodData.map((foodItem) => (
            <Cards
              key={foodItem._id}
              image={foodItem.image}
              name={foodItem.name}
              description={foodItem.description}
              price={foodItem.price}
              availability={foodItem.available} 
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}
export default Section3;