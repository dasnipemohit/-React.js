import React from "react";
import { Route, Routes  } from "react-router-dom";
// import Responesive from "./Componets/Responesive";
// import Tuesday21 from "./Componets/Tuesday21";
// import Video from "./Componets/Video";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Header from "./Componets/Header"




function App() {
  return (

<Routes>
  <Route path="/" element={<Header/>} />
  <Route path="Home" element={<Home/>} />
  <Route path="About" element={<About/>}/>
<Route path="Contact" element={<Contact/>}/>
<Route path="Service" element={<Service/>}/>
</Routes>


)
    
}

export default App;
