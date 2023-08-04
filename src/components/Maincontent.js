import React from 'react';
import Hero from './Hero';
import Contact from './Contact';
import Box from './Box';

import innovativeLogo from './../assets/lightbulb-o.png';
import loyalityLogo from './../assets/bank.png';
import respectLogo from './../assets/balance-scale.png';

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 text-center mt-5 mb-3">
            <h3>OUR VALUES</h3>
          </div>
        </div>
            <div className="row justify-content-center mb-5">
                <div className="col-md-8 d-flex row justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center text-center mb-3">
                        <Box
                        icon={innovativeLogo}
                        title="INNOVATIVE"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        backgroundColor="#ea7c6f"
                        borderColor="#b30000"
                        iconWidth="16px"
                        iconHeight="28px"
                        />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center text-center mb-3">
                        <Box
                        icon={loyalityLogo}
                        title="LOYALTY"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        backgroundColor="#6a996f"
                        borderColor="#004d1a"
                        iconWidth="25px"
                        iconHeight="25px"
                        />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center text-center mb-3">
                        <Box
                        icon={respectLogo}
                        title="RESPECT"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        backgroundColor="#5696c2"
                        borderColor="#0047b3"
                        iconWidth="25px"
                        iconHeight="25px"
                        />
                    </div>
                </div>
            </div>
        
        <div className="row justify-content-center my-5">
          <div className="col-6 text-center">
            <h3>CONTACT US</h3>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;