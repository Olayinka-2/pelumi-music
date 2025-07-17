import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";

function App() {

  return (
    <>
    <header className="py-5">
      <Header />
      <HeroSection />
    </header>
    <main>
      <AboutMe />
    </main>
    </>
  )
}

export default App;
