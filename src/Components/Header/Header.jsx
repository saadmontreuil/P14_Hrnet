import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Wealth Health</h1>
      </Link>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;
