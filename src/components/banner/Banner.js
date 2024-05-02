import React from 'react';
import './style.css';

export default function Banner({children}) {
  return (
    <div className='bg'>
        <div className='container'>
          {children}
        </div>
    </div>
  )
}
