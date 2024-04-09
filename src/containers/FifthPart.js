import React from 'react'
import "./FifthPart.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function FifthPart() {
  return (
    <div className='text-containers'>
      <h1 className='h1-tag'>As a <span className='stay-connected'>global business,</span>we encourage you to contact</h1>
      <h1 className='h1-tag'> us no matter where you are located in the world.</h1>
      <p className='small-text'>Browse our job opportunities across the globe.</p>
      <p className='stay-connected'>OPEN ROLES <IoArrowForwardCircleOutline /></p>
      <div>
        <img src="https://img.freepik.com/free-photo/global-globalization-world-map-environmental-concservation-concept_53876-124164.jpg?size=626&ext=jpg&ga=GA1.1.139062161.1690268137&semt=ais" alt="" />
      </div>
    </div>
  )
}
