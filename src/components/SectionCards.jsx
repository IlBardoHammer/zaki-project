import Button from "./Button.jsx";
import iconChevronRight from "../assets/icon/ChevronRight.png";
import Card from "./Card.jsx";
import '../styles/components/SectionCards.scss';

const SectionCards = ({ theme, title }) => {
  const themeClass = theme === 'dark'
    ? 'sectionCards__theme-dark'
    : theme === 'accent'
      ? 'sectionCards__theme-accent'
      : '';
  return (
    <section className={ `sectionCards ${ themeClass }` }>
      <div className="sectionCards__head">
        <h2 className="sectionCards__title">{ title }</h2>
        <Button variant="alt" iconPosition="after" icon={ iconChevronRight } textColor="white" altColor="white"
                iconColor="white">See all</Button>
      </div>
      <div className="sectionCards__container">
        <Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur cum cupiditate dolorem earum,
          exercitationem fuga in minima</Card>
        <Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur cum cupiditate dolorem earum,
          exercitationem fuga in minima</Card>
        <Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur cum cupiditate dolorem earum,
          exercitationem fuga in minima.</Card>
        <Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur cum cupiditate dolorem earum,
          exercitationem fuga in minima</Card>
      </div>
    </section>
  )
}
export default SectionCards;