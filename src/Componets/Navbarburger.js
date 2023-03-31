import React from 'react'

const Navbarburger = () => {
  return (
    
    <div className='main-nav'>
      <div className='bar'></div>
      <div className='bar'></div>
       <div className='bar'></div>
    
        <div className='logo'>
            <h2><span>T</span>echnical
            <span>T</span>eam</h2>
            
        </div>
        <div className='menu-link'>
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
         <div className='social-media'>
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
        </div>
          </div>

      



  
  )
}

export default Navbarburger
