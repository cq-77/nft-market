import React from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../assets/data/data'

import '../styles/nft-details.css'

const NftDetails = () => {

  //id is the same in Routers.js
  const {id} = useParams();
  const singleNFT = NFT__DATA.find(item => item.id === id)

  return (
    <>
      {/* <CommonSection title={singleNFT.title}/> */}

      <section className='nft__details'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={singleNFT.imgUrl} alt="" className='w-100 single__nft-img'/>
            </Col>
            <Col lg='6'>
              <div className="single__nft__content">
                <h2>{singleNFT.title}</h2>

                <div className='d-flex align-items-center justify-content-between mt-4 mb-4'>
                  <div className=' d-flex align-items-center gap-4 single__nft-seen'>
                    <span><i class="ri-eye-line"></i>520 views</span>
                    <span><i class="ri-heart-line"></i>1314 favorite</span>
                  </div>
                </div>

                <div className="nft__creator d-flex gap-3 align-items-center">
                  <div className="creator__img"><img src={singleNFT.creatorImg} alt='' className='w-100' /></div>

                  <div className="creator__detail">
                    <p>Created By</p>
                    <h8>{singleNFT.creator}</h8>
                  </div>
                </div>

                <p className='my-4'>{singleNFT.desc}</p>
                <div className='buttons'>
                    <button className="addbuy__btn d-flex align-items-center gap-1">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                    <button className='addcart__btn d-flex align-items-center gap-1'></button>    
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default NftDetails