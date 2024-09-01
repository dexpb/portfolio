import About from "./components/About/About";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Footer from "./components/Footer/Footer";
import { Services } from "./components/Services/services";
import { Projects } from "./components/Projects/Projects";
import Hardskills from "./components/SkillsComponent/Hardskills";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-light-mode dark:bg-dark-mode lg:w-screen">
      <Header />
      <Introduction />
      <About />
      <Services />
      <Hardskills />
      <Projects />
      <Footer />
    </main>
  );
}
