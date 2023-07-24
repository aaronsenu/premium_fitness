import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom"
import swal from 'sweetalert';

//import {Link as Linkroll} from "react-scroll"



const Header = () => {
  function confirmLogout(){
    window.scroll(1000,1000)
    swal({
      title: "Are you sure you want to Logout?",
      icon: "warning",
      buttons: ["Keep Exploring!", "Yes"],
      dangerMode: true,
    })
    .then((willExit) => {
      
      if (willExit) {
        
        logout()
        window.scroll(0,0)
        
        swal("You have sucessfully logged out!", {
          icon: "success",
        });
      } 
    });

  }
  function logout(){
    
    localStorage.setItem("status", false)
    localStorage.setItem("email", "")
    localStorage.setItem("name", "")
    window.scroll(0,0)
  }
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

  if(localStorage.getItem("status") == "false"){
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

<Link to = "/sports"
          onClick={() => {
            window.scroll(0, 0);
          }}
          >Sports</Link>





          </ul>
        </div>


        <div className='navbar-buttons'>
          <div className='navbar_btn_1-link'>
            <Link to="/membership"
              onClick={() => {
                window.scroll(0, 0);
              }}><buttons className="btn">BECOME A MEMBER</buttons>
            </Link>                      
          </div> 

          <div className='navbar_btn_2-link'>
            <Link to="/login"
              onClick={() => {
                window.scroll(100, 150);
              }}><buttons className="btn">LOG IN</buttons>
            </Link>                      
          </div> 

                      
                        
                            
  </div> 
      </div>
    </header>
  );}


  else{
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
  
  <Link to = "/sports"
            onClick={() => {
              window.scroll(0, 0);
            }}
            >Sports</Link>



            </ul>
          </div>
  
  
          <div className='navbar-buttons'>
            <div className='navbar_btn_1-link'>
              <Link to="/myHome"
                onClick={() => {
                  window.scroll(0, 0);
                }}><buttons className="btn">MY Home</buttons>
              </Link>                      
            </div> 
  
            <div className='navbar_btn_2-link'>
              
                 <buttons onClick={() => {
                  confirmLogout();
                  
                }}className="btn">LOG OUT</buttons>
                               
            </div> 
  
                        
                          
                              
    </div> 
        </div>
      </header>
    );
    
  }

 
};

export default Header;