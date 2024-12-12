import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "./../Components/Banner";
import "./../Components/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import { CardContext } from "../context/CardContext";
// Font Icon
import { FaEye } from "react-icons/fa";


const Home = () => {
  const { addToCard } = useContext(CardContext)

  const [user, setUser] = useState([]);

  //! First way to fetch data from axios
  // const fetchData = async ()=>{
  //   try {
  //     const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //     setUser(response.data)
  //   } catch (error) {
  //     console.log("error creating post:", error);
  //   }
  // }

  // useEffect(()=>{
  //   fetchData();
  // }, []);

  //! second way to fetch data from axios
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  // console.log(user);
  return (
    <>
      <Outlet />
      <Banner />
      {/* Product List */}
      <section className="ProductList">
        <div className="container">
          <h2>Product List</h2>
          <div className="cardTable">
            {user.map((post, index) => (
              <div className="card cardDetails" key={index}>
                <img src={post.image} className="card-img-top" alt="..." />
                <div className="card-body cardBody">
                  <p className="card-title">{post.title.substring(0,20)}</p>
                  <p className="card-text">${post.price}</p>
                  <div className="viewCard flex">
                    <button onClick={()=> addToCard (post,post.id)}>Add to card</button>
                    <Link to={`product_details/${post.id}`}><FaEye /></Link>
                    {/* <a href="product_details/{id}">View</a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
