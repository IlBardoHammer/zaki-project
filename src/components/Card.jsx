import '../styles/components/Card.scss';
import Button from "./Button.jsx";
import iconChevronRight from "../assets/icon/ChevronRight.png";

const Card = ({ color, children, img }) => {
  const cardColor = color === 'grey' ? 'card__grey' : '';

  const hasText = children !== undefined && children !== null;
  const cardClass = `card ${cardColor} ${hasText ? '' : 'card__no-text'}`;

  return (
    <section className={cardClass}>
      {img && <img className="card__img" src={img} alt="img-card" />}
      <h4 className="card__title">Title card here</h4>
      {hasText && <p className="card__p">{children}</p>}
      <Button
        variant="primary"
        buttonSize="small"
        icon={iconChevronRight}
        iconPosition="after"
        iconSize="xs"
        className="card__button"
        iconColor="white"
      >
        Discover
      </Button>
    </section>
  );
};

export default Card;
