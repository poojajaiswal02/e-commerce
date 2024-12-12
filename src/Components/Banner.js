import React from "react";
import Banner4 from './../assets/banner4.jpg'
import './../Components/Home.css'
// import "./../Components/Banner.css"

const Banner = () => {
  return (
    <>
    <div className=" bannerImg">
              <img src={Banner4} className="d-block w-100" alt="..."  />
            </div>
      {/* <div className="">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active bannerImg">
              <img src={Banner3} className="d-block w-100" alt="..."  />
            </div>
            <div className="carousel-item  bannerImg">
              <img src={Banner1} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item bannerImg">
              <img src={Banner2} className="d-block w-100" alt="..."  />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Banner;
