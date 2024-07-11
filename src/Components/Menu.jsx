import React from 'react'
import Menu1 from '../images/menu-1.png'
import Menu2 from '../images/menu-2.png'
import Menu3 from '../images/menu-3.png'
import Menu4 from '../images/menu-4.png'
import Menu5 from '../images/menu-5.png'
import Menu6 from '../images/menu-6.png'
const Menu = () => {
  return (
    <div>
      <div className="container-fluid bg-black">
        <div className="container">
          <div className="heading1">
            <h1>Our <span>Menu</span></h1>
          </div>
          <div className="flex f-gap">
            <div className="w-30">
              <img src={Menu1} alt="" />
              <h3>Taste And Healthy</h3>
              <p>RS_99 <span>RS_199</span></p>
              <a href="#" className='btnn'>Add To Cart</a>
            </div>
            <div className="w-30">
              <img src={Menu2} alt="" />
              <h3>Taste And Healthy</h3>
              <p>RS_99 <span>RS_199</span></p>
              <a href="#" className='btnn'>Add To Cart</a>
            </div>
            <div className="w-30">
              <img src={Menu3} alt="" />
              <h3>Taste And Healthy</h3>
              <p>RS_99 <span>RS_199</span></p>
              <a href="#" className='btnn'>Add To Cart</a>
            </div>
            <div className="w-30">
              <img src={Menu4} alt="" />
              <h3>Taste And Healthy</h3>
              <p>RS_99 <span>RS_199</span></p>
              <a href="#" className='btnn'>Add To Cart</a>
            </div>
            <div className="w-30">
              <img src={Menu5} alt="" />
              <h3>Taste And Healthy</h3>
              <p>RS_99 <span>RS_199</span></p>
              <a href="#" className='btnn'>Add To Cart</a>
            </div>
            <div className="w-30">
              <img src={Menu6} alt="" />
              <h3>Taste And Healthy</h3>
              <p>RS_99 <span>RS_199</span></p>
              <a href="#" className='btnn'>Add To Cart</a>
            </div>
          </div>
          


        </div>
      </div>
    </div>
  )
}

export default Menu
