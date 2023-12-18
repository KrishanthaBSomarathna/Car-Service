import React from 'react';
import './Service.css'
import s1 from '../img/service-01.jpg'
import s2 from '../img/service-02.jpg'
import s3 from '../img/service-03-1.jpg'

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-items">
        <div className="service-item">
          <i className="fas fa-certificate fa-3x icon"></i>
          <div className="content">
            <h5 className="title">Periodic Maintenance</h5>
            <img src={s1} width={400}/>
            <p className="description">Wash & Grooming<br/>Waxing<br/>Undercarriage<br/>Degreasing
            <br/>Lube Services<br/>
Interior/Exterior </p>
            <a className="read-more" href="#">
              Read More
            </a>
          </div>
        </div>
        <div className="service-item">
          <i className="fas fa-users-cog fa-3x icon"></i>
          <div className="content">
            <h5 className="title">Paints & Repairs</h5>
            <img src={s2} width={400}/>
            <p className="description">Nano Coating 
            <br/>Spare Parts Replacement
            <br/>Mechanical Repair
            <br/>Full Paints
            <br/>Hybrid Services
            <br/>4X4 Maintenances</p>
            <a className="read-more" href="#">
              Read More
            </a>
          </div>
        </div>
        <div className="service-item">
          <i className="fas fa-tools fa-3x icon"></i>
          <div className="content">
            <h5 className="title">Terminal Services</h5>
            <img src={s3} width={400}/>
            <p className="description">Engine Tune-up
            <br/>Lube Services
            <br/>Windscreean Treatments
            <br/>Tyre Replacements
            <br/>Wheel Alignment</p>
            <a className="read-more" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
