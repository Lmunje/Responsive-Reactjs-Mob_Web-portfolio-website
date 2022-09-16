import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf'
import {themeContext} from "../../Context";
import {useContext} from "react";
import {motion} from 'framer-motion'


const Services = () => {
  // creating animation settings
const transition = { duration : 1, type: 'spring'}

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
   <div className="services" id='Services'>
    
    {/* left side */}
    <div className="awesome">
<span style = {{color : darkMode? 'white' : '' }} >My Awesome</span>
<span>Services</span>
<spane>Lorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum 
    <br />
    an unknown printer took a galley of type and 
    scrambled it to make a type specimen book.</spane>
    {/* setting link to download resume */}
    <a  href={Resume} download>

       
    <button className="button s-button">Download Resume</button>
    </a>
    {/* blur part of intro section */}
    <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>

    {/* blur part of service section */}
    <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>



    </div>
    {/* right side */}
    {/* with animation framer apply */}
    <div className="cards">
       <motion.div
         initial={{left: '-35%'}}
         whileInView={{left: '2rem'}}
         transition={transition}
       style={{left:'30rem'}}>
        <Card
        emoji ={HeartEmoji}
        heading = {'Design'}
        detail = {"Sketch, Android Studio, adobe Photoshop, adobe Xd"}
       />
      </motion.div>

      {/* second card */}
      {/* with animation framer apply */}
      <motion.div 
      initial={{left: '-15%'}}
      whileInView={{left: '18rem'}}
      transition={transition}
      
      
      style={{top:"18rem", left:"6rem"}}>
        <Card
        emoji={Glasses}
        heading={"Developer"}
        detail={"Html, Css, JavaScript, React, Java, C++, C, CSharp"}
        />
      </motion.div>

      {/* 3rd card */}
  <motion.div
        initial={{left: '-15%'}}
        whileInView={{left: '34rem'}}
        transition={transition}

        style={{top:"30rem", left:"25rem"}}>
        <Card
        emoji={Humble}
        heading={"UI/UX"}
        detail={" Proto.io, Figma, Framer, flutter, illustrator, Webflow"}
        />
      </motion.div>

    </div>
   </div>
  )
}

export default Services
