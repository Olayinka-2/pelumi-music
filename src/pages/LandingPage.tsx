import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Music from "../components/Music";
import Video from "../components/Video";

const HomePage:React.FC = () => {
  return (
    <>
    <header>
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

export default HomePage;