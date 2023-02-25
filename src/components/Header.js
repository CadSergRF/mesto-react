import React from 'react'
import logo from '../img/logo.svg';

const Header = () => {
  return (
    <header className="header root__container">
      <img className="logo header__logo" src={logo} alt="Логотип" />
    </header>
  )
}

export default Header