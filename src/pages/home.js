import React from 'react';
import Banner from '../components/banner/Banner';
import Newbook from '../components/newbooks/Newbook';

export default function home() {
  return (
      <>
        <Banner>
            <h1 className="index">Welcome to IT BOOKSTORE</h1>
            <h2 className="index">IT, Programming and Computer Science Books</h2>          
        </Banner>
        <Newbook />
      </>
  )
}
