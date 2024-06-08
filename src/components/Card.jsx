import '../styles/components/Card.scss';
import img from "../assets/img-card.png";
import Button from "./Button.jsx";
import iconChevronRight from "../assets/icon/ChevronRight.png";

const Card = ({ color }) => {
  return (
    <section className="card">
      <img className="card__img" src={img} alt="img-card"/>
      <h4 className="card__title">Title card here</h4>
      <p className="card__p">Lorem ipsum dolor sit amet adipiscit arisma alus nacumi so anum arimeto remuscit alumni</p>
      <Button variant="primary" size="small" icon={ iconChevronRight } iconPosition="after" iconSize="xs" textColor="white" className="card__button">Discover</Button>
    </section>
  )
}

export default Card;