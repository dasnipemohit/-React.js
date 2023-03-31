import React from 'react'
import Header from '../Componets/Header'
import Responesive from '../Componets/Responesive'

const About = () => {
  return (
    <div>
      <Header/>
      <h1>HEllo About</h1>
      <div className='Remote'>
   <img src='https://assets.website-files.com/62aee78456e420f166ac4d1d/62b0e7b28cc691b2cd70c6ec_Ebook%20Cover%202.svg' alt='pic.about'/>
  <p>By Maxwell Milton</p>
  <h3>Remote Work for Design Teams</h3>
  <p>Repudiandae asperiores excepturi repellat minus id et. Saepe molestiae accusantium fugit et aut. Reicie</p>
</div>

      <Responesive/>
      
    </div>
  )
}

export default About

