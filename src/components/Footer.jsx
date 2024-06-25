import Button from "./Button.jsx";
import '../styles/components/Footer.scss';
import arrowRight from "../assets/icon/ArrowRight.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <h2 className="footer__logo">logo</h2>
        <div className="footer__button-container">
          <Button altColor="dark-grey" iconColor="grey" variant="alt" buttonSize="small" icon={ arrowRight } iconPosition="after">About us</Button>
          <Button altColor="dark-grey" iconColor="grey" variant="alt" buttonSize="small" icon={ arrowRight } iconPosition="after">FAQ</Button>
          <Button altColor="dark-grey" iconColor="grey" variant="alt" buttonSize="small" icon={ arrowRight } iconPosition="after">Partners</Button>
        </div>
      </div>
      <span className="footer__span">Copyright 2024 - Megacorp S.r.L.</span>
    </footer>
  )
}

export default Footer;