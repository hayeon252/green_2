import React from 'react';

function Section2Component() {

   return (
      <section id="section2">
      <div className="left board">
        <button className="notice-btn">공지사항</button>
        <div className="notice-box board-box">
          <div className="gap">
            <ul>
              <li><a href="#" title="Green 복지재단 공지사항1" className="modal-btn">Green 복지재단 공지사항1</a><span>2020.11.23</span></li>
              <li><a href="#" title="Green 복지재단 공지사항2">Green 복지재단 공지사항2</a><span>2020.11.23</span></li>
              <li><a href="#" title="Green 복지재단 공지사항3">Green 복지재단 공지사항3</a><span>2020.11.23</span></li>
              <li><a href="#" title="Green 복지재단 공지사항4">Green 복지재단 공지사항4</a><span>2020.11.23</span></li>
            </ul>  
          </div>
        </div>
      </div>
      <div className="center board">
        <button className="gallery-btn">갤러리</button>
        <div className="gallery-box board-box">

          <a href="#" title="icon1">
          <img src="./images/icon1.png" alt="icon1"/>
          </a>
          <a href="#" title="icon2">
          <img src="./images/icon2.png" alt="icon1"/>
          </a>
          <a href="#" title="icon3">
          <img src="./images/icon3.png" alt="icon1"/>
          </a>

        </div>
      </div>  
      <div className="right">
        <div className="banner">
          <div className='title'><h2>EVENT BANNER</h2></div>
          <div className="img-box">
            <a href="#" title="banner"><img src="./images/banner.jpg" alt="banner"/></a>
          </div>
        </div>
      </div>  
    </section>
   );
};

export default Section2Component;