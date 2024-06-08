import "/src/styles/main.scss";
import Header from "./components/Header.jsx";
import img from "./assets/imgHome.jpg";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import iconChevronRight from "./assets/icon/ChevronRight.png";
import SectionCards from "./components/SectionCards.jsx";


const App = () => {
  return (
    <>
      <section className="home">
        <Header/>
        <section className="home__welcome">
          <img className="home__welcome-image" src={img} alt="home img"/>
          <div className="home__welcome-content">
            <span className="home__welcome-span">Vision</span>
            <h2 className="home__welcome-title">Your best partner in everything</h2>
            <p className="home__welcome-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim  veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
            <Button variant="primary">Discover more</Button>
          </div>
        </section>
        <SectionCards theme="accent"/>
      </section>
    </>
  )
}

export default App;
