import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../Components/Home";
// import card Context
import { CardContext } from "../context/CardContext";

const ProductDetails = () => {

  const { addToCard } = useContext(CardContext);

  const [product, setProduct] = useState("");

  const { productId } = useParams();
  // console.log(productId);


  const singleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleProduct();
  });


  return (
    <>
      {/* <Card cardItem={cardItem}/> */}
      <section className="SingleCard">
        <div className="container">
          <div className="sordHeaderLink">
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li>/</li>
              <li className="active">Shop Product</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={product.image} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="productDetails">
                <h3 className="mb-4">{product.title}</h3>
                <p>
                  Rating {product.rating && product.rating.rate}{" "}
                  <i className="fa-regular fa-star"></i>
                </p>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <div className="pro-details-quality">
                  <div className="addToCard">
                    <button onClick={() => addToCard(product, product.id)}>Add to Card</button>
                  </div>
                </div>
                <p>Categories : {product.category}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;




