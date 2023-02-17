import React from 'react';

import './modal.css';

const Modal = ({setShowModal}) => {

  return (
    <div className="modal__wrapper">
        <div className="single__modal">
        {/* <h6 className='text-center text-light'>Place a bid</h6>
            <p className='text-center text-light'>You must bid at least <span>5.89 ETH</span></p>

            <div className="input__item">
                <input type="number" placeholder='set your bid' />
            </div>

            <div className="input__item">
                <h6>Enter Quantity</h6>
                <input type="number" placeholder='set your bid' />
            </div>
            
            <div className='d-flex align-items-center justify-content-between'>
                <p>You must bid at least</p>
                <span>5.89 ETH</span>
            </div>

            <div className='d-flex align-items-center justify-content-between'>
                <p>Service Fee</p>
                <span>0.89 ETH</span>
            </div>

            <div className='d-flex align-items-center justify-content-between'>
                <p>Total Bid Amount</p>
                <span>0.89 ETH</span>
            </div>

            <button className="place__bid-btn">
                Place a Bid
            </button> */}

            <div className="modal__header">
                <p className='text-center text-light'>Purchase NFT</p>
                <span className="close__modal"><i class="ri-close-line" onClick={() => setShowModal(false)}></i></span>
            </div>
            
            <div className="modal__img mb-4">
                <img src="" alt="" className='w-100' />
            </div>

            {/* <div className='input__price mb-4'>
                <input type="number" min="0" placeholder="Set Price" />
            </div> */}
            
            <div>
                <button className="sell__btn">BUY</button>
            </div>
            
        </div>
    </div>
  )
}

export default Modal