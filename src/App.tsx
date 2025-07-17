import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {

  return (
    <>
    <header>
      <Header />
      <HeroSection />
    </header>
    <main className="px-4">
      <section id="About-me">
        <div>
          <div className="about-header">
            <h3>About Me</h3>
            <button className="btn btn-text-dark btn-lg">Read More</button>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default App;
