import React from 'react';
import ReactPaginate from 'react-paginate';
import { useGlobalContext } from '../../container/context';
import './style.css';

export default function SearchBooks() {
  const {searchBookList, constantSearch, setPagination} = useGlobalContext();
  
  const handlePageClick = (data) => {
    setPagination(data.selected +1);
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="searchtitle">
              <h1>{`"${constantSearch}" search results`}</h1>
            <p>Found <strong>{searchBookList.total}</strong> books</p>
          </div>
        </div>
        {searchBookList.books.map((bookinfo) => {
          const {title, isbn13, price, subtitle, image} = bookinfo;

          return(
            <div className='contianer search-container' key={isbn13}>        
              <div className="search-book-list">
                <a href={`../books/${isbn13}`}>
                  <img src={image}
                  alt={title} title={title}  />
                </a>
                <div className='search-book-desc'>
                  <a href={`../books/${isbn13}`}>
                    <h1>{title}</h1>
                  </a>
                    <p>{subtitle}</p>
                    <p className='desc-tag'>
                        <small>Price: &nbsp;</small>
                        <strong>
                          <p className='color2'>{price === `$0.00` ? 'Free Book' : `${price}`}</p>
                        </strong>
                    </p>              
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div className="container">      
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={Math.ceil(searchBookList.total/10)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          pageClassName={'selected'}
        />
      </div>
    </>
  )
}
