import React from 'react'
import Header from '../Componets/Header'
import Responesive from '../Componets/Responesive'

const Home = () => {
  return (
    <div>
        <Header/>
      <h1>HEllo WOrld!
        Welcome to Home Page.</h1>
        <div className='Handbook'>
  <img src='https://assets.website-files.com/62aee78456e420f166ac4d1d/62b0e909698fe432638ec008_Ebook%20Cover%204.svg'/>
  <p>By Nikolai Bain</p>
  <h2> All in One Color Handbook</h2> 
  <p>Dignissimos dolores enim ipsum quia occaecati voluptas aut delectus. Reiciendis recusandae minima quod qui. Eum dicta et nihil ad et nam. Vitae et itaque porro. Ipsa distinctio laboriosam veritatis. Minus quia eos ut.</p>
</div>
      
      <Responesive/>
    </div>
  )
}

export default Home
