import "../styles/components/Megamenu.scss";
import iconChevronUp from "../assets/icon/ChevronUp.png";
import iconChevronDown from "../assets/icon/ChevronDown.png";
import iconChevronRight from "../assets/icon/ChevronRight.png";
import defaultImg from "../assets/img-card.png";
import Button from "./Button.jsx";
import Card from "./Card.jsx";

const MegamenuResources = () => {
  return (
    <section className="megamenu">
      <menu className="megamenu__sidebar">
        <h2>Quickstart</h2>
        <h2>Developers<img className="megamenu__img" src={ iconChevronUp }/></h2>
        <p className="megamenu__p">Documentation</p>
        <p className="megamenu__p">Api Docs</p>
        <h2>Tutorials</h2>
      </menu>
      <div className="megamenu__content">
        <div className="megamenu__row">
          <div className="megamenu__row-cards">
            <Card color="grey" img={ defaultImg }/>
            <Card color="grey" img={ defaultImg }/>
            <Card color="grey" img={ defaultImg }/>
          </div>
        </div>
        <div className="megamenu__row">
          <div className="megamenu__row-details">
            <h2>Related</h2>
            <Button variant="alt" iconPosition="after" icon={ iconChevronRight } buttonSize="small">See all</Button>
          </div>
          <div className="megamenu__row-cards">
            <Card color="grey"/>
            <Card color="grey"/>
            <Card color="grey"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MegamenuResources;