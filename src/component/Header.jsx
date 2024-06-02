import '../styles/scss/Header.scss';
import Button from "./Button.jsx";
import iconChevronDown from "../assets/icon/ChevronDown.png";
import iconSearch from "../assets/icon/Search.png";


const Header = () => {
  return (
    <header className="header">
      <h2 className="header__logo">logo</h2>
      <nav className="header__menu-container">
        <Button variant="alt" icon={ iconChevronDown } iconPosition="after">Solutions</Button>
        <Button variant="alt">About Us</Button>
        <Button variant="alt" icon={ iconChevronDown } iconPosition="after">Resources</Button>
        <Button variant="alt">Contacts</Button>
      </nav>
      <Button variant="primary" icon={ iconSearch } iconPosition="after">Search</Button>
    </header>
  )

}

export default Header;
