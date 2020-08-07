import React from 'react';
import Subscribe from './Subscribe';
import BkgFooter from '../Images/Footer.svg';
import MynxFooter from '../Images/MynxFooter.svg';
import '../Styles/Footer.css';

const categories = [
  'Latim',
  'Lorem',
  'Ipsum',
  'Dolor',
  'Sit',
  'Amen',
  'Crux',
  'Sacra',
  'Sit',
  'Mihi',
  'Lux'
];

const Footer = () => (
  <div className="Footer_father">
    <img className="Footer_background" src={BkgFooter} alt="background footer" />
    <Subscribe />
    <div className="Footer_data">
      <div>
        <div>
          <h4>Contacts</h4>
          <p>New Elsiebury</p>
          <p>634 Halvorson Estates Suite 039</p>
        </div>
        <div>
          <h4>Phone</h4>
          <p>8 800 888 80 80</p>
          <p>mynx.skype</p>
        </div>
        <div>
          <button
            type="button"
            className="WhiteButton"
          >
            Contact us
          </button>
          <button
            type="button"
            className="WhiteButton"
          >
            Visit us
          </button>
        </div>
      </div>
      <div>
        <h4>Popular Categories</h4>
        <div className="Footer_categories">
          {categories.map((category) => (
            <button
              type="button"
              className="Footer_button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4>Recent Posts</h4>
        <h6>28 Aug 2018</h6>
        <p>Althusser Competing Interpellations</p>
        <h6>21 Feb 2018</h6>
        <p>Enlightenment Is Not Just One State</p>
      </div>
    </div>
    <div className="Footer_copyright">
      <img src={MynxFooter} alt="mynx black" />
      <p>© 2020 All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
