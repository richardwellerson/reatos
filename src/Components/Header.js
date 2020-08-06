import React from 'react';
import MynxLogo from '../Images/Mynx.svg';
import '../Styles/Header.css';

const Header = () => {
  return (
    <div className="Header_father">
      <img src={MynxLogo} alt="Mynx Logo" />
      <div className="Header_options">
        <button type="button">Demos</button>
        <button type="button">Pages</button>
        <button type="button">Elements</button>
        <button type="button">Blog</button>
        <button type="button">Contacts</button>
      </div>
    </div>
  );
};

export default Header;
