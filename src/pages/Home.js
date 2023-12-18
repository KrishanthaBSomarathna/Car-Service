import React from 'react';
import one from '../img/1.jpg';
import two from '../img/2.jpg';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './About.js';
import Service from './Service';
import Booking from './Booking';
import AdminDashboard from './AdminDashboard.js';

export default function Home() {
  return (
    <>
    
    <Carousel>
      <Carousel.Item>
        <div style={{ backgroundImage: `url(${one})`, backgroundSize: 'cover', height: '100vh' }}>
          <Carousel.Caption>
          <h6 class="text-white text-uppercase mb-3 ">// Car Servicing //</h6>
          <h1 class=" ">Qualified Car Repair Service Center</h1>
          <a href="" class="btn btn-danger py-3 px-5 ">Learn More<i class="fa fa-arrow-right ms-3"></i></a>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ backgroundImage: `url(${two})`, backgroundSize: 'cover', height: '100vh' }}>
          <Carousel.Caption>
          <h6 class="text-white text-uppercase mb-3 ">// Car Servicing //</h6>
          <h1 class="">Qualified Car Repair Service Center</h1>
          <a href="" class="btn btn-danger py-3 px-5 ">Learn More<i class="fa fa-arrow-right ms-3"></i></a>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    
    </Carousel >
    <Service id='service'/>
    <About id='about'/>
    <Booking/>
    </>
  );
}
