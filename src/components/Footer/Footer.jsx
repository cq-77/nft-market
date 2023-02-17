import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import './footer.css';

const MY__ACCOUNT = [
  {
    display: 'Profile',
    url: '/profile'
  },
  {
    display: 'Create',
    url: '/create'
  },
]

const RESOURCES = [
  {
    display: 'Learn',
    url: '#'
  },
  {
    display: 'Help Center',
    url: '#'
  },
]

const COMPANY = [
  {
    display: 'About',
    url: '#'
  },
  {
    display: 'Careers',
    url: '#'
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='6' sm='6'>
            <div className="logo">
              <h2 className='d-flex gap-2 align-items-center'>
                <span><i class="ri-global-fill"></i></span> 
                NFT MARKET
              </h2>
              <p>A digital platform for discovering, creating, buying and selling of NFTs.</p>
            </div>
          </Col>

          <Col lg='2' md='3' sm='6'>
            <h5>My Account</h5>
            <ListGroup className='list__group'>
              {
                MY__ACCOUNT.map((item, index) => (
                  <ListGroupItem key={index} className='list__item'>
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='2' md='3' sm='6'>
            <h5>Resources</h5>
            <ListGroup className='list__group'>
                {
                  RESOURCES.map((item, index) => (
                    <ListGroupItem key={index} className='list__item'>
                      <Link to={item.url}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
            </ListGroup>
          </Col>

          <Col lg='2' md='3' sm='6'>
            <h5>Company</h5>
            <ListGroup className='list__group'>
                  {
                    COMPANY.map((item, index) => (
                      <ListGroupItem key={index} className='list__item'>
                        <Link to={item.url}>{item.display}</Link>
                      </ListGroupItem>
                    ))
                  }
            </ListGroup>
          </Col>

          <Col lg='3' md='6' sm='6'>
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder='Email' />
            <div className="social__links d-flex gap-3 align-items-center">
              <span><Link to='#'><i class="ri-facebook-box-fill"></i></Link></span>
              <span><Link to='#'><i class="ri-instagram-line"></i></Link></span>
              <span><Link to='#'><i class="ri-twitter-line"></i></Link></span>
              <span><Link to='#'><i class="ri-telegram-line"></i></Link></span>
              <span><Link to='#'><i class="ri-discord-line"></i></Link></span>
            </div>
          </Col>

          <Col lg='12' className='mt-4 text-center'>
            <p className='copyright'> Copyrights 2023, Developed by Jia Qi. All Rights Reserved. </p>
          </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer