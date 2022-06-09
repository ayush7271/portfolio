import React from 'react'
import "./mobile.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const Mobile = () => {
    const[state,setstate]=useState(false)
  return (
    <div className='hamburger' onClick={()=>setstate(!state)}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>

       
        {state?
             <ul style={{ height:"auto",width:"350px",display:"grid",gridTemplateColumns:"auto auto auto", listStyleType: "none",marginLeft:"-20px",paddingTop:"20px",position:"absolute" }}>
             <li>
               <Link  to="" spy={true} smooth={true}>
                 Home
               </Link>
             </li>
             <li>
               <Link to="services">
                 Services
               </Link>
             </li>
             <li>
               <Link to="experience" >
                 Experience
               </Link>
             </li>
             <li>
               <Link to="portfolio" >
                 Portfolio
               </Link>
             </li>
             <li>
               <Link to="techstack" >
                 TechStack
               </Link> 
             </li>
             <li>
               <Link to="about" >
                 About
               </Link> 
             </li>
           </ul>:
           " "
    }




    </div>
  )
}
