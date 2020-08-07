import React from 'react';
import { titles } from '../Utils/data.js'
import '../Styles/GoodRank.css';

const GoodRank = () => {
  return (
    <div className="GoodRank_father">
      <h2>Have You Forgotten How Good Site Rank Tastes?</h2>
      <p>
        Ut accumsan tortor et est pretium rutrum.
        Donec tincidunt dictum lobortis. Ut aliquam nisl eget justo finibus,
        ac efficitur enim faucibus. Proin ultrices sagittis libero et maximus.
      </p>
      <div className="GoodRank_titles">
        {titles.map(({ title, image, describe }) => (
          <div className="GoodRank_eachTitle">
            <h3>{title}</h3>
            <img src={image} alt={`${title}`} />
            <p>{describe}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodRank;
