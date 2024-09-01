import About from "./components/About/About";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import { Services } from "./components/Services/services";
import Hardskills from "./components/SkillsComponent/Hardskills";
import { Projects } from "./components/Projects/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-light-mode dark:bg-dark-mode lg:w-screen">
      <div className="flex flex-col gap-20">
        <Header />
        <Introduction />
        <About />
        <Services />
        <Hardskills />
        <Projects/>
        <Footer />
      </div>
    </main>
  );
}
