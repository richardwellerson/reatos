import React from 'react';
import MynxLogo from '../Images/Mynx.svg';
import '../Styles/Header.css';

const Header = () => (
  <div className="Header_father">
    <img src={MynxLogo} alt="Mynx Logo" />
    <div className="Header_options">
      <button className="Header_button" type="button">Demos</button>
      <button className="Header_button" type="button">Pages</button>
      <button className="Header_button" type="button">Elements</button>
      <button className="Header_button" type="button">Blog</button>
      <button className="Header_button" type="button">Contacts</button>
    </div>
  </div>
);

export default Header;


