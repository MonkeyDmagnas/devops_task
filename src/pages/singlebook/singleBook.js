import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { useGlobalContext } from '../../container/context';
import Banner from '../../components/banner/Banner';
import './style.css';

const url = "https://api.itbook.store/1.0/books/"

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

export default function SingleBook() {
  const {addtocart} = useGlobalContext();
  const [bookDetail, setBookDetail] = useState([]);
  const {isbn13} = useParams();
  const stars = Array(5).fill(0);

  const fetchData = useCallback(async() => {
  const response = await fetch(`${url}${isbn13}`);
  const dataFetch = await response.json();
    setBookDetail(dataFetch);
  }, [isbn13]); 

  useEffect(() => {
    fetchData();
  },[isbn13, fetchData]);

  const {
    title,
    desc,
    image,
    price,
    authors,
    publisher,
    language,
    rating,
    year,
    pages
  } = bookDetail;

  return (
    <>
      <Banner>
            <h1 className="single-book-title">{title}</h1>
            <h2 className="single-book-desc">{desc}</h2>        
      </Banner>
      <section>
        <div className="container">
          <div className="breadcrumb">
            <a href="/" title="IT Bookstore">Bookstore</a>
            <p>&nbsp;&gt;</p>
            <a href="#" title="Books">&nbsp;Books</a>
            <p>&nbsp;&gt;</p>
            <b>&nbsp;{title}</b>
          </div>
          <div className="singlepage-book">
            <img src={image} alt="" title={title} />
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td><strong>{title}</strong></td>
                </tr> 
                <tr>
                  <td>Price</td>
                  <td className='color2'>
                    <strong>{price === `$0.00` ? 'Free Book' : `${price}`}</strong>
                  </td>
                </tr> 
                <tr>
                  <td>Author</td>
                  <td><strong>{authors}</strong></td>
                </tr> 
                <tr>
                  <td>Publisher</td>
                  <td><strong>{publisher}</strong></td>
                </tr> 
                <tr>
                  <td>Language</td>
                  <td><strong>{language}</strong></td>
                </tr> 
                <tr>
                  <td>Rating</td>
                  <td>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          color={rating > index ? colors.orange : colors.grey}
                          style={{
                            marginRight: 10,
                            cursor: "pointer"
                          }}
                        />
                      );
                    })}
                  </td>
                </tr> 
                <tr>
                  <td>Year</td>
                  <td><a href="#"><strong>{year}</strong></a></td>
                </tr> 
                <tr>
                  <td>Pages</td>
                  <td><strong>{`${pages} pages`}</strong></td>
                </tr> 
                <tr>
                  <td>Description</td>
                  <td><strong>{desc}</strong></td>
                </tr> 
                <tr>
                  <td>&nbsp;</td>
                  <td>
                    <button className='button button1' onClick={()=>addtocart(isbn13)}>
                      Add to Cart
                    </button>
                  </td>
                </tr>                 
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
