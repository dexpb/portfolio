import About from "./components/About/About";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";
import Footer from './components/Footer/Footer';
import { Services } from "./components/Services/services";

export default function Home() {
  return (
    <main className="lg:w-screen min-h-screen dark:bg-dark-mode bg-light-mode flex  flex-col ">
      <div className="flex flex-col gap-10">
      <Header />
      <Introduction />
      <About />
      <Services/>
      <Projects/>
      <Footer/>
      </div>
    </main>
  );
}
