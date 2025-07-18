import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Music from "./components/Music";
import Video from "./components/Video";
import FooterSection from "./components/Footer";


function App() {

  return (
    <>
    <header className="py-5">
      <NavBar />
      <HeroSection />
    </header>
    <main>
      <AboutMe />
      <Music />
      <Video />
    </main>
    <footer>
      <FooterSection />
    </footer>
    </>
  )
}

export default App;
