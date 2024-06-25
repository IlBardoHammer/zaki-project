import '../styles/components/SectionSplit.scss';
import img from "../assets/imgHome.jpg";
import Button from "./Button.jsx";

const SectionSplit = ({ layout = 'default', span, title, buttonText, variantButton, iconButton, iconPosition}) => {
  const sectionClass = `section-split section-split--${layout}`;
  const imageClass = `section-split__image ${layout === 'default' ? '' : 'section-split__image--square'}`;
  const contentClass = `section-split__content`;
  const buttonClass = `section-split__btn section-split__btn--${layout}`;

  return (
    <section className={sectionClass}>
      <img className={imageClass} src={img} alt="home img"/>
      <div className={contentClass}>
        <span className="section-split__span">{span}</span>
        <h2 className="section-split__title">{title}</h2>
        <p className="section-split__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Button variant={ variantButton } className={buttonClass} icon={iconButton} iconColor="accent" iconPosition={ iconPosition }>{buttonText}</Button>
      </div>
    </section>
  );
}

export default SectionSplit;