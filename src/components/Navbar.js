import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import NavBarLinks from './NavBarLinks';

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id="navbar" className="flex flex-row justify-between p-4">
      <div id="logo"> LOGO </div>
      <div id="Me">Yannis BARBA</div>
      <NavBarLinks isOpen={isOpen} />
      <div id="burgerMenu" className="visible lg:invisible">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
}

export default NavBar;
