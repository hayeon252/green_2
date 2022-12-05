import React from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import ModalComponent from './ModalComponent';

function WrapComponent() {

   return (
      <div id="wrap">
         <HeaderComponent/>
         <MainComponent/>
         <FooterComponent/>
         <ModalComponent/>
      </div>
   );
};

export default WrapComponent;