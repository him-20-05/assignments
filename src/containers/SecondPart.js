import React from 'react'
import './SecondPart.css'
import "./FirstPart.css";

export default function SecondPart() {
  return (
    <>
    <div className='body-parts'>
        <div className='second-part'>
        <p>01</p>
        <h1>We stay connected <a href="/" className="next round">&#8250;</a></h1>
        </div>

        <div className='second-part'>
        <p>02</p>
        <h1>We believe in diversity & inclusion<a href="/" className="next round">&#8250;</a></h1>
        </div>

        <div className='second-part'>
        <p>03</p>
        <h1>We celebrate success <a href="/" className="next round">&#8250;</a></h1>
        </div>
    </div>
    </>
  )
}

