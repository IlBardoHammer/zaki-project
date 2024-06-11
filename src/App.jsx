import "/src/styles/main.scss";
import Header from "./components/Header.jsx";
import SectionCards from "./components/SectionCards.jsx";
import SectionSplit from "./components/SectionSplit.jsx";


const App = () => {
  return (
    <>
      <section className="home">
        <Header/>
        <SectionSplit/>
        <SectionCards theme="accent"/>
      </section>
    </>
  )
}

export default App;
