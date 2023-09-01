import React from "react";

import { BrowserRouter,Routes, Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import ProjectDetails from "./Pages/ProjectDetails";
import Error from "./Pages/Error";
import Footer from "./Components/Footer";

function App() {
  return (
      <>
      <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
        
        
      </>
    
  );
}

export default App;
