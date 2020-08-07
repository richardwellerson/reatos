import React from 'react';
import BkgSubscribe from '../Images/BackgroundSubscribe.svg';
import '../Styles/Subscribe.css';

const Subscribe = () => (
  <div className="Subscribe_father">
    <img src={BkgSubscribe} alt="Subscribe bg" />
    <div className="Subscribe_data">
      <h3 className="WhiteParag">Subscribe to our newsletter</h3>
      <input type="email" onChange={(({ target }) => console.log(target.value))} />
      <button
        type="button"
        className="Header_button"
      >
        Subscribe
        </button>
    </div>
  </div>
);

export default Subscribe;
