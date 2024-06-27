import '../styles/components/Header.scss';
import Button from "./Button.jsx";
import iconChevronDown from "../assets/icon/ChevronDown.png";
import iconChevronUp from "../assets/icon/ChevronUp.png"; // Assicurati di avere questa icona

import iconSearch from "../assets/icon/Search.png";
import { useState } from "react";
import Megamenu from "./Megamenu.jsx";

const Header = () => {
  const [ isMegaMenuOpen, setMegaMenuOpen ] = useState(false);

  const toggleMegaMenu = () => {
    setMegaMenuOpen( !isMegaMenuOpen);
  };
  return (
    <>
      <header className="header">
        <h2 className="header__logo">logo</h2>
        <nav className="header__menu-container">
          <Button onClick={ toggleMegaMenu } variant="alt" icon={isMegaMenuOpen ? iconChevronUp : iconChevronDown}
                  iconPosition="after">Solutions</Button>
          <Button variant="alt">About Us</Button>
          <Button variant="alt" icon={ iconChevronDown } iconPosition="after">Resources</Button>
          <Button variant="alt">Contacts</Button>
        </nav>
        <Button variant="primary" icon={ iconSearch } iconPosition="after" iconColor="white">Search</Button>
      </header>
      { isMegaMenuOpen && <Megamenu/> }
    </>

  )

}

export default Header;
