import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home';
import Footer from './components/footer/Footer';
import SingleBook from './pages/singlebook/singleBook';
import Cart from './pages/cart/cart';
import Error from './pages/error';
import SearchBooks from './pages/searchBookList/searchBooks';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<SearchBooks />} /> */}
        <Route path='/books/:isbn13' element={<SingleBook />} />
        <Route path=':title' element={<SearchBooks />} />
        <Route path='/shoppingcart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

