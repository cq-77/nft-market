import React, {useRef, useEffect} from 'react';
import './header.css';
import { Container } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const NAV__LINKS = [
  {
    display:'Home',
    url:'/home'
  },
  {
    display:'Market',
    url:'/market'
  },
  {
    display:'Create',
    url:'/create'
  },
]

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header__shrink');
      }
      else{
        headerRef.current.classList.remove('header__shrink');
      }
    });

    // return () => {
    //   window.removeEventListener('scroll');
    // };

  },[]);

  const toggleMenu = () => menuRef.current.classList.toggle('active__menu');

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className='d-flex gap-2 align-items-center'>
              <span><i class="ri-global-fill"></i></span> 
              NFT MARKET
            </h2>
          </div>
          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                <NavLink to={item.url} className={navClass => navClass.isActive ? 'active' : ''}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5">
            <button className="btn" onClick={() => navigate('/connect')}>
              {/* <Link to='/connect' className="d-flex gap-2 align-items-center">
                <span><i class="ri-wallet-line"></i></span>
                Connect Wallet 
              </Link> */}
               <span><i class="ri-wallet-line"></i></span>
                Connect Wallet 
            </button>

            <span className="mobile__menu"><i class="ri-menu-line" onClick={toggleMenu}></i></span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header