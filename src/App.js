import './App.css';
import AboutSection from './components/AboutComponent';
import FactsSection from './components/FactsComponent';
import Header from './components/HeaderComponent';
import HeroSection from './components/HeroComponent';
import ResumeSection from './components/ResumeComponent';
import ServicesSection from './components/ServicesComponent';
import SkillsSection from './components/SkillsComponent';

function App() {
    return (
      <div>
        <header id="header">
          <Header></Header>
        </header>
        <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
          <HeroSection></HeroSection>
        </section>
        <main id="main">
        <section id="about" class="about section-bg">
          <AboutSection></AboutSection>
        </section>
        <section id="facts" class="facts">
          <FactsSection></FactsSection>
        </section>
        <section id="skills" class="skills section-bg">
          <SkillsSection></SkillsSection>
        </section>
        <section id="resume" class="resume">
          <ResumeSection></ResumeSection>
        </section> 
        </main>
      </div>
    );
}

export default App;
