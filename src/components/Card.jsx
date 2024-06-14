import '../styles/components/Card.scss';
import img from "../assets/img-card.png";
import Button from "./Button.jsx";
import iconChevronRight from "../assets/icon/ChevronRight.png";

const Card = ({ color, children }) => {
  return (
    <section className="card">
      <img className="card__img" src={ img } alt="img-card"/>
      <h4 className="card__title">Title card here</h4>
      <p className="card__p">{ children }</p>
      <Button variant="primary" buttonSize="small" icon={ iconChevronRight } iconPosition="after" iconSize="xs"
              textColor="white" className="card__button" iconColor="white">Discover</Button>
    </section>
  )
}

export default Card;