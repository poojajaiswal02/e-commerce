// import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const CardContext = createContext();

const CardProvider = ({ children }) => {

  const [cardItem, setCardItem] = useState([]);

  const [ItemAmount, setItemAmount] = useState(0);

  
  // Uplade item amount in card(notification)
  useEffect(()=>{
    if(cardItem){
      const amount = cardItem.reduce((accumulator, currentItem)=>{
        return accumulator + currentItem.amount
      },0);
      setItemAmount(amount);
    }else{
     return ItemAmount
    }
  }, [cardItem])

  
  // find item in card if item is already exit if yes item increace item count
  const addToCard = (post, id) => {
    // console.log(`Item ${post.title} Added to the card`);
    const itemCount = { ...post, amount: 1 }
    // console.log(itemCount);

    // check if the item is already in the card......
    const itemFind = cardItem.find((item) => {
      return item.id === id;
    });

    if (itemFind) {
      const newCard = [...cardItem].map((item) => {
        if (item.id === id) {
          return { ...item, amount: itemFind.amount + 1 }
        } else {
          return item;
        }
      });
      setCardItem(newCard)
    } else {
      setCardItem([...cardItem, itemCount])
    }
  };
  console.log(cardItem);


  // Clear all data.....
  const clearCard = () => {
    setCardItem([])
  }
  
  // Remove card from added card list.....
  const removeFromCard = (id) => {
    const newList = cardItem.filter(item => item.id !== id)
    setCardItem(newList)
  }

  // Product Increment & Decrement
  const increment = (id) => {
    // console.log("add item");
    const countItem = cardItem.find((item) => item.id === id)
    addToCard(countItem, id);
  };

  const decrement = (id) => {
    const countDec = cardItem.find((item) => {
      return item.id === id
    });
    // console.log(countDec);
    if (countDec) {
      const hello = cardItem.map((item) => {
        if (item.id === id) {
          return { ...item, amount: countDec.amount - 1 }
        } else {
          return item
        }
      });
      setCardItem(hello)
    }
    if (countDec.amount < 2) {
      removeFromCard(id)
    }
  }


  // useEffect(()=>{
  //     axios.get("https://fakestoreapi.com/products")
  //     .then((res)=>{
  //       setCardItem(res.data)
  //     })
  //     .catch((error)=>{
  //       console.log(error);

  //     })
  // })

  return (
    <>
      <CardContext.Provider value={{ addToCard, removeFromCard, cardItem, setCardItem, clearCard, increment, decrement, ItemAmount }}>
        {children}
      </CardContext.Provider>
    </>
  )
}


export default CardProvider
