import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';

const NftCard = (props) => {

  const {title, id, price, creatorImg, imgUrl, creator} = props.item;
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
    <div className="single__nft__card">
        <div onClick={() => navigate(`/market/${id}`)}>
            <h5 className="nft__title">{title}</h5>

            <div className="creator__info__wrapper d-flex gap-3">
                <div className="creator__img">
                    <img src={creatorImg} alt="" className='w-100' />
                </div>

                <div className="creator__info w-100 d-flex align-items-center justify-content-between">
                    <div>
                        <h6>Created By</h6>
                        <p>{creator}</p>
                    </div>
                </div>
            </div>

            <div className="nft__img">
                <img src={imgUrl} alt="" className='w-100' />
            </div>

            <div className="nft__content">
                <div className='creator__info mt-3 d-flex align-items-center justify-content-between mb-2'>
                    <div>
                        <h6>Price</h6>
                        <p>{price}</p>
                    </div>

                </div>
            </div>
        </div>
        <div className='buttons'>
            <button className="addbuy__btn d-flex align-items-center gap-1" onClick={() => setShowModal(true)}>
                <i class="ri-shopping-bag-line"></i>
            </button>
            <button className='addcart__btn d-flex align-items-center gap-1'></button>    
        </div>
    </div>
    <div>{showModal && <Modal setShowModal={setShowModal} />}</div>
    </>
  )
}

export default NftCard