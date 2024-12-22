import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Certificate } from "./components/Certificate/Certificate"; 
import { Contact } from "./components/Contact/Contact"; 
import { Experience } from "./components/SkillAndExperience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Certificate/>
      <Experience />
      <Projects />
      <Contact />


     </div>
  );
}

export default App;