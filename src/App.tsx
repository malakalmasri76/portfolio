import "./App.css";
import AboutSection from "./components/about-section";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import SkillsSection from "./components/SkillsSection";

function App() {
  return <div className="min-h-screen bg-white">
    <Navigation/>
    <main>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <AchievementsSection/>
      <ContactSection/>
    </main>
  </div>;
}

export default App;
