import React from 'react';
import "./Sixth.css";
import { FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";

export default function SixthPart() {
  return (
    <>
      <div className='black-background'>
        
        <div className='icon-container second-part'>
          <FaInstagram className='icon' />
          <SiFacebook className='icon' />
          <CiLinkedin className='icon' />
        </div>

        <div className='second-part'>
          <p>Expertise</p>
          <p>Specialist Expertise</p>
          <p>Commercial Advice</p>
          <p>Traffic & Transport</p>
        </div>

        <div className='second-part'>
          <p>Sectors</p>
          <p>Road</p>
          <p>Bridge</p>
          <p>Others +</p>
        </div>

        <div className='second-part'>
          <p>Our Business</p>
          <p>Work with us</p>
          <p>Projects</p>
          <p>News</p>
        </div>

        <div className='second-part'>
          <p>Our Capabilities</p>
          <p>Engineers</p>
          <p>Contacts</p>
        </div>
        
       
      </div>
      <div className='black-backgrounds'>
      <div className='icon-containers'>
      <span style={{color:'white'}}><FaRegCopyright className='icon'/>2024 Case International. All right reserved. </span>
          <p>Terms & condition</p>
          <p>Privacy Policy</p>
        </div>
        </div>
    </>
  );
}
