import "/src/styles/main.scss";
import Header from "./components/Header.jsx";
import SectionCards from "./components/SectionCards.jsx";
import SectionSplit from "./components/SectionSplit.jsx";


const App = () => {
  return (
    <>
      <section className="home">
        <Header/>
        <SectionSplit span="vision" title="Your best partner in everything" buttonText="Discover more"/>
        <SectionCards theme="accent"/>
        <SectionSplit layout="left" span="Mission" title="Making the web smarter" buttonText="Delve into it"/>
        <SectionSplit layout="right" span="Mission" title="Putting humans back in control" buttonText="Delve into it"/>
      </section>
    </>
  )
}

export default App;
