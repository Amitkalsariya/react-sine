import React from 'react';
import AboutImg from '../images/about-img';

const About = () => {
  return (
    <>
      <div className="container-fluid bg-black ">
        <div className="container">
          <div className="heading">
            <h1 align="center">
              <span>About</span>  us
            </h1>
          </div>
          <div className="row"> 
            <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <img src={AboutImg} alt="" className="img-fluid" />
            </div>
            <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12 pd1 bg-blue c">
              <h2>
                What Makes Our Food Special?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
                ratione a officiis id temporibus autem? Quod nemo facilis
                cupiditate. Ex, vel?
              </p>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?
              </p>
              <a href="#" className='btnn'>
                Learn More
              </a>
            </div>
          </div>
        
    
        </div>
      </div>
    </>
  )
}

export default About;
