import Button from "./Button.jsx";
import iconChevronRight from "../assets/icon/ChevronRight.png";
import img from "../assets/img-card.png";
import "../styles/components/CardTiny.scss";



const CardTiny = () => {
  return (
    <div className="card-tiny">
      <img className="card-tiny__img" src={img} alt=""/>
      <div className="card-tiny__details">
        <h5 className="card-tiny__title">Title card here</h5>
        <p className="card-tiny__p">Lorem ipsum dolor sit amet adipiscit arisma alus nacumi so anum arimeto</p>
      </div>
      <Button variant="primary" iconPosition="after" icon={ iconChevronRight } iconColor="white" iconSize="small">Visit</Button>
    </div>
  )
}

export default CardTiny;