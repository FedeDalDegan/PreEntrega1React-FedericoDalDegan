import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel className='crss' interval={2500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='src\assets\img\ps.png'
          alt="PlayStation publicidad"
        />
        <Carousel.Caption>
          <h3>PlayStation</h3>
          <p>Descripcion PlayStation</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\img\switch.jpg"
          alt="Switch publicidad"
        />
        <Carousel.Caption>
          <h3>Switch</h3>
          <p>Descripción Switch</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\img\xbox.webp"
          alt="Xbox publicidad"
        />
        <Carousel.Caption>
          <h3>Xbox</h3>
          <p>Descripción Xbox</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
