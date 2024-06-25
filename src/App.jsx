import "/src/styles/main.scss";
import Header from "./components/Header.jsx";
import SectionCards from "./components/SectionCards.jsx";
import SectionSplit from "./components/SectionSplit.jsx";
import arrow from "/src/assets/icon/ArrowRight.png";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
  return (
    <>
      <section className="home">
        <Header/>
        <SectionSplit span="vision" title="Your best partner in everything" buttonText="Discover more"
                      variantButton="primary"/>
        <SectionCards theme="accent" title="Our Solutions"/>
        <SectionSplit layout="left" span="Mission" title="Making the web smarter" buttonText="Delve into it"
                      variantButton="alt" iconButton={ arrow } iconPosition="before"/>
        <SectionSplit layout="right" span="Mission" title="Putting humans back in control" buttonText="Delve into it"
                      variantButton="alt" iconButton={ arrow } iconPosition="before"/>
        <div className="section-split__content">
          <h2 className="section-split__title">Interested Yet?</h2>
          <p className="section-split__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button variant="primary" icon={arrow} iconColor="white" iconPosition="before">Get a quote</Button>
        </div>
        <SectionCards theme="dark" title="Latest from the blog"/>
      </section>
      <Footer/>
    </>
  )
}

export default App;
