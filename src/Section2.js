import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function Section2 () {
  return(
    <section>  
      <div className="carausal-container">
        <h3 className="sub-heading"
        style={{ marginTop:"55px"}}>
          Other Products
        </h3>
        <Carousel style={{width:"300px",margin:"auto"}}>
          <Carousel.Item >
            <img 
              className="d-block w-100"
              src='./images/image1.jpeg'
              alt="First slide"
            />
            <Carousel.Caption >
              <h3>Nike</h3>
            </Carousel.Caption>
          </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src='./images/image2.jpg'
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Rebook</h3> 
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='./images/image3.jpeg'
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Adidas</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='./images/image4.jpg'
              alt="fourth slide"
            />
            <Carousel.Caption>
              <h3>Puma</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>   
  );
}
export default Section2;