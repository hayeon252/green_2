import React from 'react';

function Section1Component() {
   return (
      <section id="section1">
      <div className="slide-container">
      <div className="slide-view">
         <ul className="slide-wrap">
            <li className="slide slide3">
            <img src="./images/img3.jpg" alt=""/>
            <h2></h2>
            </li>              
            <li className="slide slide1">
            <img src="./images/img1.jpg" alt=""/>
            <h2></h2>
            </li>
            <li className="slide slide2">
            <img src="./images/img2.jpg" alt=""/>
            <h2></h2>
            </li>
            <li className="slide slide3">
            <img src="./images/img3.jpg" alt=""/>
            <h2></h2>
            </li>
            <li className="slide slide1">
            <img src="./images/img1.jpg" alt=""/>
            <h2></h2>
            </li>              
         </ul>
      </div>
      </div>
   </section>
   );
};

export default Section1Component; 