import About from "./components/About/About";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Footer from "./components/Footer/Footer";
import { Services } from "./components/Services/services";
import { Projects } from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-light-mode dark:bg-dark-mode lg:w-screen">
      <div className="flex flex-col gap-20">
        <Header />
        <Introduction />
        <About />
        <Services />
        <Skills/>
        <Projects/>
        <Footer />
      </div>
    </main>
  );
}
