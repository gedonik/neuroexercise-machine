import React from 'react';

import HeaderCategories from './headerCategories/HeaderCategories';
import HeaderInfo from './headerInfo/HeaderInfo';
import HeaderMenu from './headerMenu/HeaderMenu';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <HeaderMenu />
        <HeaderInfo />
        <HeaderCategories />
      </div>
    </header>
  );
}

export default Header;
