import React from 'react'
import { FaBars, FaTimes} from "react-icons/fa";


// function Nabvar() {
//      const navRef = useRef();

// const showNabvar =() => {
//      navRef.current.classList.toogle("responsive_nav");
// }
  return (
    <header>

<h3> Responsive Nav</h3>
<nav ref={}>
    <a href='./#'>Home</a>
    <a href='/#'> My Work</a>
    <a href='/#'> Blog</a>
    <a href='/#'>About Me</a>
  <button className='nav-btn nav-close-btn' onClick={showNabvar}>
    <FaTimes/>
  </button>
    </nav>   
    <button className='nav-btn'  onClick={showNabvar}>
        <FaBars/>
        </button> 
    </header>
  );

export default Nabvar;
