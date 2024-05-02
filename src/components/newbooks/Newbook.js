import React from 'react';
import { useFetch } from '../../container/useFetch';
import './style.css';

const url = "https://api.itbook.store/1.0/new";

export default function Newbook() {
    const {data} = useFetch(url);

    if(data){
        return (
          <div className='container'>
              <h3 className="index par">
                  <span>New Releases Books</span>
              </h3>
              <div className="book-center">
                  {data.map((newbooks) => {
                      const {image, isbn13, price, title} = newbooks;
                      return ( 
                        <article className='book' key={isbn13}>
                            <a href={`books/${isbn13}`} className="img-container">
                                <img src={image} alt={title} url={isbn13} title={title} />
                            </a>
                            <div className="book-info">
                                <a href={`books/${isbn13}`} title={title}>{title}</a>
                                <p>{price === `$0.00` ? 'Free Book' : `${price}`}</p>
                            </div>
                        </article>                                                                       
                      );
                  })}
              </div>
          </div>
        )
    }
}
    
