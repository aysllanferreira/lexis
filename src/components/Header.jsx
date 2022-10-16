import React, { useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { toggleTheme, loadTheme, getTheme } from '../scripts/theme';
import '../styles/Header.scss';

function Header() {
  useEffect(() => {
    loadTheme();
  }, []);

  const [icon, setIcon] = useState(getTheme() === 'light' ? MdOutlineDarkMode : MdOutlineWbSunny);

  const toggle = () => {
    toggleTheme();
    setIcon(
      getTheme() === 'light' ? MdOutlineDarkMode : MdOutlineWbSunny,
    );
  };

  return (
    <header className="Header">
      <div>
        <h1>Lexis</h1>
        <p>Dictionary</p>
      </div>

      <button type="button" onClick={toggle}>
        {icon}
      </button>
    </header>
  );
}

export default Header;
