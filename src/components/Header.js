import React from 'react';

function Header() {
  return (
    <header className="header">
      <img src="/logo.gif" alt="Animated Logo" className="logo" />
      <nav className="nav-buttons">
        <button>HOME</button>
        <button>CREATE NEW</button>
        <button>LOG OUT</button>
      </nav>
    </header>
  );
}

export default Header;
