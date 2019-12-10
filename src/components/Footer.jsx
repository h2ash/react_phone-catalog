import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <Link className="link link--footer">GitHub Link</Link>
    <Link to="/rights" className="link link--footer">Rights</Link>
  </footer>
)

export default Footer;