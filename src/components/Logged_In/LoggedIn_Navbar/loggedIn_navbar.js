import React, { useEffect, useState } from 'react';
import "./loggedIn_navbar.css"
import logo from "../../../assets/logo.png"
import {Link} from "react-router-dom"
//import {Link as Linkroll} from "react-scroll"



const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.header');
    const headerTop = header.getBoundingClientRect().top;

    const handleScroll = () => {
      setIsSticky(window.scrollY > headerTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'is-sticky' : ''}`}>
      <div className="header__inner">
        <div className="header__logo">
            <Link to = "/"
            onClick={() => {
              window.scroll(0, 0);
            }}><img src={logo} alt="" className='logo'/></Link> 
        </div>
        <div className="header__nav">

          <ul className='navbar-menu'>
          <Link to = "/clubs"
          onClick={() => {
            window.scroll(0, 0);
          }}
          >Clubs</Link>
          <Link to = "/classes"
          onClick={() => {
            window.scroll(0, 0);
          }}
          >Classes</Link>

          <Link to = "/membership"
          onClick={() => {
            window.scroll(0, 0);
          }}
          >Membership</Link>

<Link to = "/schedule"
          onClick={() => {
            window.scroll(0, 0);
          }}
          >schedule</Link>
          </ul>
        </div>


        <div className='navbar-buttons'>
          <div className='navbar_btn_1-link'>
            <Link to="/membership"
              onClick={() => {
                window.scroll(0, 0);
              }}><buttons className="btn">MY ACCOUNT</buttons>
            </Link>                      
          </div> 

          <div className='navbar_btn_2-link'>
            <Link to="/login"
              onClick={() => {
                window.scroll(0, 0);
              }}><buttons className="btn">LOG OUT</buttons>
            </Link>                      
          </div> 

                      
                        
                            
  </div> 
      </div>
    </header>
  );
};

export default Header;