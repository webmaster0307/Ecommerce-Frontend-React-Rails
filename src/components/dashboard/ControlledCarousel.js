import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const ControlledCarousel = () => {
  return (
    <div className="carousel-wrapper">
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/SIGN.jpg"
    
                // height="600"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>One Stop Shopping.</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/LABTOP.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>The latest trends in technology.</h3>
                {/* <p>The latest trends.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/SALE.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h3 >Best prices all the time</h3> */}
                {/* <p className="image3-color" >Best prices all the time.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
    </div>
  )
}

export default ControlledCarousel;


