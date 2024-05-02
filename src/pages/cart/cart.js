import React from 'react';
import { useGlobalContext } from '../../container/context';
import Banner from '../../components/banner/Banner';
import './style.css';

export default function Cart() {
  const {retrived} = useGlobalContext();
  return (
    <>
      <Banner>
          <h1 className="index">Your Cart</h1>
      </Banner>

      <div className='container'>
        <div className="singlepage-book">
          <table className="table table-striped" style={{marginTop: "10vh"}}>
            <tbody>
              {retrived.map((data) => {
                return (
                  <tr>
                    <td>
                      <img src={data.image} alt="" className='cart-img' />
                    </td>
                    <td>{data.title}</td>
                    <td><strong>{data.price}</strong></td>
                  </tr>                
                );
              })}
              <tr>
                <td>&nbsp;</td>
                <td>Total</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
