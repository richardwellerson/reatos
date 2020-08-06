import React from 'react';
import BkgPowerUp from '../Images/BackgroundPowerUp.svg';
import SEOPowerUp from '../Images/PowerUp.svg'
import '../Styles/PowerUp.css';
import '../Styles/Generic.css';

const PowerUp = () => (
  <div className="PowerUp_father">
    <img className="PowerUp_background" src={BkgPowerUp} alt="background powerup" />
    <div className="PowerUp_absolute">
      <img src={SEOPowerUp} alt="powerup person" />
      <div className="PowerUp_text">
        <p className="WhiteTitle">Power up your Site Rank In Google</p>
        <p className="WhiteParag">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
        <button className="WhiteButton" type="button">Start Now</button>
      </div>
    </div>
  </div>
);

export default PowerUp;
