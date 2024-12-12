import React, { useContext, useEffect, useState } from "react";
import "./Card.css";
import { CardContext } from "../context/CardContext";
import { Link } from "react-router-dom";
// Add icon
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";


const Card = () => {

  const { cardItem, setCardItem, removeFromCard, clearCard, increment, decrement } = useContext(CardContext);


  // Totale Item amount..........
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cardItem.reduce((accumulater, currentItem) => {
      return accumulater + currentItem.price * currentItem.amount
    }, 0)
    setTotal(totalAmount)
  })

  // if card was empty the show the "Card was Empty" please Shop Now"

  // {cardItem.length === 0 ? ():()}

  return (
    <>
      <div className="container">
        <div className="sordHeaderLink pt-4">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li>/</li>
            <li className="active">Card</li>
          </ul>
        </div>
        <div className="card-page">
          {cardItem.length === 0 ? (
            <div className="card-title">
              <h3 className="cardHeading">Shopping Bag</h3>
              <p>Card was Empty Please <a href="/">Shop Now</a></p>
            </div>
          ) : (
            <div className="productsection">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="productList">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Prodcut Name</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cardItem.map((item) => (
                            <tr>
                              <td><Link to={`/product_details/${item.id}`}><img src={item.image} alt="" /></Link></td>
                              <td><Link to={`/product_details/${item.id}`}>{item.title}</Link></td>
                              <td>${item.price}</td>
                              <td className="product-count">
                                <div className="pro-plus-minus">
                                  <button onClick={() => decrement(item.id)}><IoRemoveOutline />
                                  </button>
                                  <input type="" value={item.amount} readOnly />
                                  <button onClick={() => increment(item.id)}> <IoAddOutline /> </button>
                                </div>
                              </td>
                              <td className="bold">${(item.price * item.amount)}</td>
                              <td onClick={() => removeFromCard(item.id)}><RxCross2 /></td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="amount">
                <div className="totalAmount">
                  <h4>Grand Total: ${total}</h4>
                  <div className="checkOut">
                    <button>Proceed To Checkout</button>
                  </div>
                </div>
                <div className="clearCard">
                  <button onClick={clearCard}><MdDelete className="deleteIcon" /></button>
                </div>
              </div>
            </div>
          )}


          {/* <div className="row">
            <div className="totalAmount">
              <h4>Grand Total:</h4>
              <h4>${total}</h4>
            </div>
            <div className="checkOut">
              <button>Proceed To Checkout</button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Card;
