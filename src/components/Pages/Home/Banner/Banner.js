import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../../images/banner/banner1.jpg'
import img2 from '../../../../images/banner/banner2.jpg'
import img3 from '../../../../images/banner/banner3.jpg'

const Banner = () => {
    return (
        <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1> My Ultra Vission</h1>
          <p >Functional development to describe individuals who require assistance for disabilities that may be medical or psychological. For instance, the Diagnostic Statistical Manual of Mental Disorders.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>My Super Goal</h1>
          <p>More narrowly, it is a legal term applying in foster 
           care in the United States, derived from the language 
           in the Adoption and Safe Families Act.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>My Extreme Mission</h1>
          <p>
          Functional development to describe individuals who require 
          assistance for disabilities that may be medical 
          or psychological. For instance, the Diagnostic Statistical Manual of Mental Disorders.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
        </div>
    );
};

export default Banner;
