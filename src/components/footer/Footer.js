import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <strong>Bookstore © {new Date().getFullYear()}</strong>
        </div>
      </div>  
    </footer>
  )
}
