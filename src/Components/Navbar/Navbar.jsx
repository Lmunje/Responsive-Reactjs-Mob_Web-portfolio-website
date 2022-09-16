import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'
import Portfolio from '../Portfolio/Portfolio'
import Testimonials from '../Testimonials/Testimonials'
import Works from '../Works/Works'

const Navbar = () => {
  return (
    <div   className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Lionel</div>
           <Toggle/>
        </div>
      <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType:'none'}}>
              <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                <li>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} >
                <li>Services</li>
                </Link>
                <Link spy={true} to='Experiences' smooth={true} >
                <li>Experiences</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true} >
                <li>Portfolio</li>
                </Link>
                <Link spy={true} to='Testimonials' smooth={true} >
                <li>Testimonials</li>
                </Link>
                <Link spy={true} to='Works' smooth={true} >
                <li>Works</li>
                </Link>
                
                
            </ul>    
        </div>
        <button className="button n-button">
            Contact 
        </button>
      </div>
    </div>
  )
}

export default Navbar
