// import Navbar from "./Component/Navbar";
import About from "./Component/About"
import Resume from "./Component/Resume"
import Project from "./Component/Project"
import Contact from "./Component/Contact"
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import { useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./Component/Assets/Style.css"
import "./Component/Assets/script.js"
import AnimatedCursor from "react-animated-cursor"


function App() {
  useEffect(() => {
    document.body.classList.add(
      'bg-slate-900',
      'leading-relaxed',
      'text-slate-400',
      'antialiased',
      'selection:bg-teal-300', 
      'selection:text-teal-900',
      );

      
    });
   
  return (
      <body className="bg-slate-900">
        <AnimatedCursor
          innerSize={10}
          outerSize={50}
          color='16, 185, 129'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={3}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
        <Navbar/>
        <Fade cascade delay={30}>
          <About />
          <hr className="mt-5"></hr>
          <Resume />
        </Fade>
        
        <Slide>
          <hr className="mt-5"></hr>
          <Project />
          <Contact />
        </Slide>
    
        <Footer />
      </body>
  );
}

export default App;
