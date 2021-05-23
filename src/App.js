import React from 'react';
import './index.css';
// import { motion } from "framer-motion";
import Slide from './Components/Slide';
// import useTilt from './useTilt';
import './style.scss';
// import {Link} from 'react-router-dom'
import soccer from './images/soccer.jpg'
import cnj from './images/cnj-logo.jpg'
import remember from './images/remember.jpg'
import typing from './images/typing.jpg'
import speech from './images/speech-bubble.jpg'


import { Router, Route, BrowserRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
// import About from '../About'





function App() {

  const slides = [
    {
      title: "Football Predictor",
      subtitle: "Project",
      description: "Update football results dynamically to anticipate future results, I further advanced my knowledge of regex, event listeners, methods such as MATCH and SLICE",
      image: soccer
      // need to add link to project
        // "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "CnJ Cars",
      subtitle: "Website for car company",
      description: "CSS with parallax scrolling effect and JS",
      
      image:
        cnj
    },
    {
      title: "Dictionary game",
      subtitle: "Add a new word with description",
      description: "Familiarised with local storage",
      image:
        remember
    },
    {
      title: "Speed typing game",
      subtitle: "Fetch API",
      description: "Deeper understanding of API's and how they work",
      image:
        typing
    },
    {
      title: "Speech Text App",
      subtitle: "Speech recognition",
      description: "Introduction to CSS grid, API's, AI's",
      ignoreRowClick: true,
      link: <a href="https://github.com/RemiHub/SpeechText.git"
      target="_blank"
      rel="noopener noreferrer">
        {" "}
        https://github.com/RemiHub/SpeechText.git
      </a>,
      image:
        speech
    }
  ];


  const initialState = {
    slideIndex: 0
  };
  
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
      };
    }
  };



  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}





// function App() {
//   return (
//     <div>
//     <h1>Hi there</h1>
//     <NewSVG />
    




    //   {/* <motion.svg animate={{
    //   scale: [1, 1.2, 1.4, 1.6, 1.8, 1],
    //   // rotate: [0, 0, 270, 270, 0],
    //   // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    //  }} // xmlns="http://www.w3.org/2000/svg" 
    //  viewBox="0 0 841.9 595.3">
    //     <g fill="white">
    //         <circle cx="420.9" cy="296.5" r="45.7"/>
    //     </g>
    //   </motion.svg> */}

      
//     </div>
//   );
// }
 
export default App;
