import Button from "./Button.jsx";
import "../styles/components/OpenSearch.scss";
import iconChevronRight from "../assets/icon/ChevronRight.png";
import Card from "./Card.jsx";
import defaultImg from "../assets/img-card.png";
import CardTiny from "./CardTiny.jsx";

const OpenSearch = () => {
  return (
    <section className="opensearch">
      <div className="opensearch__content">
        <div className="opensearch__row">
          <div className="opensearch__row-details">
            <h2>Your results for “Lorem ipsum”</h2>
            <Button variant="alt" iconPosition="after" icon={ iconChevronRight } buttonSize="small">See all</Button>
          </div>
          <div className="opensearch__row-cards">
            <Card color="grey" img={ defaultImg }>Lorem ipsum dolor sit amet adipiscit arisma alus nacumi so anum arimeto remuscit alumni</Card>
            <Card color="grey" img={ defaultImg }>Lorem ipsum dolor sit amet adipiscit arisma alus nacumi so anum arimeto remuscit alumni</Card>
            <Card color="grey" img={ defaultImg }>Lorem ipsum dolor sit amet adipiscit arisma alus nacumi so anum arimeto remuscit alumni</Card>
            <Card color="grey" img={ defaultImg }>Lorem ipsum dolor sit amet adipiscit arisma alus nacumi so anum arimeto remuscit alumni</Card>
          </div>
        </div>
        <div className="opensearch__row">
          <div className="opensearch__row-details">
            <h2>Other popular results</h2>
            <Button variant="alt" iconPosition="after" icon={ iconChevronRight } buttonSize="small">See all</Button>
          </div>
          <div className="opensearch__row-cards">
            <Card color="grey" img={ defaultImg }>Lorem ipsum dolor sit amet adipiscit arisma alus nacumi so anum arimeto remuscit alumni</Card>
            <Card color="grey" img={ defaultImg }>Lorem ipsum dolor sit amet adipiscit arisma alus nacumi so anum arimeto remuscit alumni</Card>
            <Card color="grey" img={ defaultImg }>Lorem ipsum dolor sit amet adipiscit arisma alus nacumi so anum arimeto remuscit alumni</Card>
            <Card color="grey" img={ defaultImg }>Lorem ipsum dolor sit amet adipiscit arisma alus nacumi so anum arimeto remuscit alumni</Card>
          </div>
        </div>
        <div className="opensearch__row">
          <div className="opensearch__row-details">
            <h2>Latest from the blog</h2>
            <Button variant="alt" iconPosition="after" icon={ iconChevronRight } buttonSize="small">See all</Button>
          </div>
          <div className="opensearch__row-tiny">
            <CardTiny/>
            <CardTiny/>
          </div>
          <div className="opensearch__row-tiny">
            <CardTiny/>
            <CardTiny/>
          </div>
          <div className="opensearch__row-tiny">
            <CardTiny/>
            <CardTiny/>
          </div>

        </div>

      </div>
    </section>
  )
}

export default OpenSearch;