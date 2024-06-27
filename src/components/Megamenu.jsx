import "../styles/components/Megamenu.scss";
import iconChevronUp from "../assets/icon/ChevronUp.png";
import iconChevronDown from "../assets/icon/ChevronDown.png";
import iconChevronRight from "../assets/icon/ChevronRight.png";
import defaultImg from "../assets/img-card.png";
import Button from "./Button.jsx";
import Card from "./Card.jsx";

const Megamenu = () => {
  return (
    <section className="megamenu">
      <menu className="megamenu__sidebar">
        <h2>Approach</h2>
        <h2>Services<img className="megamenu__img" src={ iconChevronUp }/></h2>
        <p className="megamenu__p">Maintenance</p>
        <p className="megamenu__p">Development</p>
        <p className="megamenu__p">Upgrades</p>
        <h2>CRM<img className="megamenu__img" src={ iconChevronDown }/></h2>
        <h2>APIs</h2>
        <h2>Integrations</h2>
      </menu>
      <div className="megamenu__content">
        <div className="megamenu__row">
          <div className="megamenu__row-details">
            <h2>Featured services</h2>
            <Button variant="alt" iconPosition="after" icon={ iconChevronRight } buttonSize="small">See all</Button>
          </div>
          <div className="megamenu__row-cards">
            <Card color="grey" img={ defaultImg }/>
            <Card color="grey" img={ defaultImg }/>
            <Card color="grey" img={ defaultImg }/>
          </div>
        </div>
        <div className="megamenu__row">
          <div className="megamenu__row-details">
            <h2>Guides</h2>
            <Button variant="alt" iconPosition="after" icon={ iconChevronRight } buttonSize="small">See all</Button>
          </div>
          <div className="megamenu__row-cards">
            <Card color="grey"/>
            <Card color="grey"/>
            <Card color="grey"/>
          </div>
        </div>
        <div className="megamenu__row">
          <div className="megamenu__row-details">
            <h2>Latest from the blog</h2>
            <Button variant="alt" iconPosition="after" icon={ iconChevronRight } buttonSize="small">See all</Button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Megamenu;