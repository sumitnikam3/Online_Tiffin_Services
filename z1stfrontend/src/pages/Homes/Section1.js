import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import Head from "./Head.png"
import { Link } from 'react-router-dom'
const section1 = () => {
  return (
    <div>
      <section className='hero_section'>
        <Container>
          <Col lg={7} className='mb-5 mb-lg-0'>
            <div className='position:relative'>
              <img src={Head} className='img-fluid' alt='hero'></img>
              <div className='price_badge'>
                <div className='badge_text'>
                  <h4 className='h4_xs'>Only</h4>
                  <h4 className='h3_lg'>₹250</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className='hero_text text-center'>
              <h1 className='text-white'>Indian Thali</h1>
              <h2 className='text-white'>Festival Special</h2>
              <p className='text-white pt-2 pb-4'>An Indian Thali is a traditional meal consisting of a variety of dishes served on a single platter</p>
              <Link to="/" className='btn order_now'>
                Order Now
              </Link>
            </div>
          </Col>
        </Container>
      </section>
    </div>
  )
}

export default section1
