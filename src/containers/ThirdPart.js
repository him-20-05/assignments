import React from 'react';
import './ThirdParty.css';
import { FaTv } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineContacts } from "react-icons/md";

export default function ThirdPart() {
  return (
    <div className='body'>
      <div className='new-body'>
        <div>
          <h1 className='h1-tag'>We <span className='stay-connected'>stay connected</span></h1>
        </div>
        <div className='icon-text'>
          <FaTv size={40} style={{ display: 'inline-block' }} /><span className='text'>Quarterly Business Updates</span>
        </div>
        <div className='lorem-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel, adipisci magnam corporis cupiditate in repellendus ut, eveniet velit nam explicabo provident illum ratione dolore nobis. </div>
        <div className='icon-text'>
          <LuMessagesSquare size={40} style={{ display: 'inline-block' }} /><span className='text'>Industry events and Networking</span>
        </div>
        <div className='icon-text'>
          <MdOutlineContacts size={40} style={{ display: 'inline-block' }} /><span className='text'>Associations Membership</span>
        </div>
      </div>
      <div className='background-image'>
        <div className="button-container">
          <a href="/" className="previous round">&#8249;</a> &nbsp;
          <a href="/" className="next round">&#8250;</a>
        </div>
      </div>
    </div>
  );
}
