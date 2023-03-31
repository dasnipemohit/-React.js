import React, { useState } from 'react'
import '../Componets/Responesive.css'
import { FaFacebookF, FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    const[showMediaIcons,setSHowMediaIcon]= useState(false);


  return (
    <>
        <div className='main-nav'>
        <div className='logo'>
            <h2><span>T</span>echnical
            <span>T</span>eam</h2>
            
        </div>
        
        <div className={showMediaIcons?"menu-link-mobile":'menu-link'}>
            <ul>
                <li>
                    <Link to ="/Home">Home</Link>
                </li>
                <li>
                    
                    <Link to ="/about">About</Link>
                
                </li>
                <li>

                <Link to ="/service">Service</Link>

               </li>

                <li>
                <Link to ="/Contact">Contact</Link>
                </li>
            </ul>
            
        </div>
        { <div className='social-media'>
            <ul className='social-media-desktop'>
                <li>
                    <Link>
                    <FaFacebookF className='facebook'/>
                    </Link>
                        
                   
                </li>
                <li>
                    <Link >
                    <FaInstagramSquare Name='instagram'/>
                    
                    </Link>
                        
                </li>
                <li>
                      <Link  > <FaYoutubeSquare Name='youtube'/></Link>
                   
                </li>
            </ul>
            <div className="hamburger-menu">
                
                <GiHamburgerMenu className='menu-icon' onClick={() =>setSHowMediaIcon(!showMediaIcons) }/>
              
            
                
            </div>
            
         </div>
} 

      </div>
      
    </>
  )
}

export default Header
