import React from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../assets/data/data';
import NftCard from '../components/ui/Nft-card/NftCard';

const Market = () => {
  return (
    <>
    <CommonSection title={'MarketPlace'}></CommonSection>

    <section>
      <Container>
        <Row>
          {
            NFT__DATA.map((item) => (
              <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}>
                <NftCard item={item}/>
              </Col>
            ))
          }
        </Row>
      </Container>

    </section>
    </>
  )
}

export default Market