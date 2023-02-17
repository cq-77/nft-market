import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import './banner.css';
import banner from '../../assets/images/banner.jpg';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="banner">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="banner__content">
                        <h2>Buy, Sell, Create and Discover exclusive digital items.</h2>
                        <div className="banner__btns d-flex align-items-center gap-4">
                            <button className='explore__btn d-flex align-items-center gap-2' onClick={() => navigate('/market')}>
                                <i class="ri-search-line"></i> Explore
                            </button>
                            <button className='create__btn d-flex align-items-center gap-2' onClick={() => navigate('/create')}>
                                <i class="ri-pencil-line"></i> Create
                            </button>
                        </div>  
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="banner__img">
                        <img src={banner} alt="" className='w-100' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner