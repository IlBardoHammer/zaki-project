import '../styles/components/Header.scss';
import Button from "./Button.jsx";
import iconChevronDown from "../assets/icon/ChevronDown.png";
import iconChevronUp from "../assets/icon/ChevronUp.png"; // Assicurati di avere questa icona

import iconSearch from "../assets/icon/Search.png";
import { useState } from "react";
import MegamenuResources from "./MegamenuResources.jsx";
import MegamenuSolutions from "./MegamenuSolutions.jsx";

const Header = () => {
  const [ isSolutionsMenuOpen, setSolutionsMenuOpen ] = useState(false);
  const [ isResourcesMenuOpen, setResourcesMenuOpen ] = useState(false);

  const toggleSolutionsMenu = () => {
    setSolutionsMenuOpen( !isSolutionsMenuOpen);
    if ( isResourcesMenuOpen ) setResourcesMenuOpen(false);
  };

  const toggleResourcesMenu = () => {
    setResourcesMenuOpen( !isResourcesMenuOpen);
    if ( isSolutionsMenuOpen ) setSolutionsMenuOpen(false); // Chiude l'altro menu se aperto
  };

  return (
    <>
      <header className="header">
        <h2 className="header__logo">logo</h2>
        <nav className="header__menu-container">
          <Button onClick={ toggleSolutionsMenu } variant="alt"
                  icon={ isSolutionsMenuOpen ? iconChevronUp : iconChevronDown }
                  iconPosition="after">Solutions</Button>
          <Button variant="alt">About Us</Button>
          <Button onClick={ toggleResourcesMenu } variant="alt"
                  icon={ isResourcesMenuOpen ? iconChevronUp : iconChevronDown }
                  iconPosition="after">Resources</Button>
          <Button variant="alt">Contacts</Button>
        </nav>
        <Button variant="primary" icon={ iconSearch } iconPosition="after" iconColor="white">Search</Button>
      </header>
      { isSolutionsMenuOpen && <MegamenuSolutions/> }
      { isResourcesMenuOpen && <MegamenuResources/> }
    </>

  )

}

export default Header;
