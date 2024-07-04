import '../styles/components/Header.scss';
import Button from "./Button.jsx";
import iconChevronDown from "../assets/icon/ChevronDown.png";
import iconChevronUp from "../assets/icon/ChevronUp.png"; // Assicurati di avere questa icona
import iconClose from "../assets/icon/Close.png"; // Assicurati di avere questa icona
import iconSearch from "../assets/icon/Search.png";
import { useEffect, useState } from "react";
import MegamenuResources from "./MegamenuResources.jsx";
import MegamenuSolutions from "./MegamenuSolutions.jsx";
import OpenSearch from "./OpenSearch.jsx";
import Spinner from "./Spinner.jsx";

const Header = () => {
  const [ isSolutionsMenuOpen, setSolutionsMenuOpen ] = useState(false);
  const [ isResourcesMenuOpen, setResourcesMenuOpen ] = useState(false);
  const [ isClicked, setIsClicked ] = useState(false);
  const [ isTyping, setIsTyping ] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);


  const toggleSolutionsMenu = () => {
    setSolutionsMenuOpen( !isSolutionsMenuOpen);
    if ( isResourcesMenuOpen ) setResourcesMenuOpen(false);
  };

  const toggleResourcesMenu = () => {
    setResourcesMenuOpen( !isResourcesMenuOpen);
    if ( isSolutionsMenuOpen ) setSolutionsMenuOpen(false); // Chiude l'altro menu se aperto
  };

  const toggleSearchButton = () => {
    setIsClicked( !isClicked);
    setIsTyping(false);
    setShowSpinner(false);
  }
  const handleInputChange = (event) => {
    setIsTyping(event.target.value.length > 0);
    setShowSpinner(true);
  };

  useEffect(() => {
    if (showSpinner) {
      const timer = setTimeout(() => {
        setShowSpinner(false);
      }, 1000); // Mostra lo spinner per 1 secondo
      return () => clearTimeout(timer); // Pulisce il timer quando il componente viene smontato o lo stato cambia
    }
  }, [showSpinner]);


  return (
    <>
      <header className="header">
        <h2 className="header__logo">logo</h2>
        <nav className="header__menu-container">
          {
            !isClicked ? (
              <>
                <Button onClick={ toggleSolutionsMenu } variant="alt"
                        icon={ isSolutionsMenuOpen ? iconChevronUp : iconChevronDown }
                        iconPosition="after">Solutions</Button>
                <Button variant="alt">About Us</Button>
                <Button onClick={ toggleResourcesMenu } variant="alt"
                        icon={ isResourcesMenuOpen ? iconChevronUp : iconChevronDown }
                        iconPosition="after">Resources</Button>
                <Button variant="alt">Contacts</Button>
              </>

            ) : (
              <>
                <input className="header__input" placeholder="Type to search" onChange={handleInputChange}/>
                <Button onClick={ toggleSearchButton } iconSize="small" variant="alt" icon={ iconClose }
                        iconPosition="after"></Button>

              </>

            )
          }

        </nav>
        <Button onClick={ toggleSearchButton } variant="primary" icon={ isClicked ? iconClose : iconSearch }
                iconPosition="after" iconColor="white" iconSize="small">{ isClicked ? 'Close search' : 'Search' }</Button>
      </header>
      { isSolutionsMenuOpen && <MegamenuSolutions/> }
      { isResourcesMenuOpen && <MegamenuResources/> }
      {isTyping && (showSpinner ? <Spinner /> : <OpenSearch />)}
    </>

  )

}

export default Header;
