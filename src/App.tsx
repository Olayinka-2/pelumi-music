import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Music from "./components/Music";
import Video from "./components/Video";


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
    </>
  )
}

export default App;
