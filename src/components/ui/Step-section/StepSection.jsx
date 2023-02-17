import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import './step-section.css';

const STEP__DATA = [
    {
        title: 'Set up your wallet',
        desc: 'Connect to your crypto wallet',
        icon: 'ri-wallet-line'
    },

    {
        title: 'Create your collection',
        desc: 'Create your collections of NFTs',
        icon: 'ri-layout-masonry-line'
    },

    {
        title: 'Add your NFTs',
        desc: 'Mint your own NFT',
        icon: 'ri-image-line'
    },

    {
        title: 'List them for sale',
        desc: 'Sell your NFT on our marketplace',
        icon: 'ri-list-check'
    },
]

const StepSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-4'>
                    <h3 className="step__title">How It Works</h3>
                </Col>

                {
                    STEP__DATA.map((item, index) => 
                        <Col lg='3' md='4' sm='6' key={index}>
                        <div className="single__step__item">
                            <span>
                            <i class={item.icon}></i>
                            </span>
                            <div className="step__item__content">
                                <h5>
                                    <Link to='/wallet'>{item.title}</Link>
                                </h5>
                                <p className='mb-0'>{item.desc}</p>
                            </div>
                        </div>
                        </Col>
                    )
                }

                
            </Row>
        </Container>
    </section>
  )
}

export default StepSection