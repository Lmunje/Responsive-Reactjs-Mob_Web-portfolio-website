import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import {themeContext} from "../../Context";
import {useContext} from "react";
import {motion} from 'framer-motion'




const Works = () => {

  const transition = { duration : 1, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Works" id="Works">
     {/* left side */}
     <div className="awesome">
<span style = {{color : darkMode? 'white' : '' }} >All My Works</span>
<span>Brands & Clients</span>
<spane>Lorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum 
    <br />
    an unknown printer took a galley of type and 
    <br />
    an unknown printer took a galley of type and 
    <br />
    scrambled it to make a type specimen book.
    </spane>

    <button className="button s-button">Hire Me</button>
    {/* blur part of intro section */}
    <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>

    {/* blur part of service section */}
    <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
    </div>

    {/* right side */}

      <div className="w-right">
      <motion.div 

      initial={{ rotate:45 }}
      whileInView={{ rotate: 0 }}
      viewport={{margin: '-40px'}}
      transition={{duration: 3.5, type: 'spring'}}
      
      className="w-mainCircle">
        <div className="w-secCircle">
          <img src={Upwork} alt="" />
        </div>

        <div className="w-secCircle">
          <img src={Fiverr} alt="" />
        </div>

        <div className="w-secCircle">
          <img src={Amazon} alt="" />
        </div>{" "}

        <div className="w-secCircle">
          <img src={Shopify} alt="" />
        </div>

        <div className="w-secCircle">
          <img src={Facebook} alt="" />
        </div>
        </motion.div>

{/* background circle */}

  <div className="w-backCircle blueCircle"></div>
  <div className="w-backCircle yellowCircle"></div>

      
    </div>
  </div>
  );
};

export default Works
