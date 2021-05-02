import Hero from "./containers/Hero";
import Form from "./containers/Form";
import Navbar from "./containers/Navbar";
import { useEffect, useRef } from "react";
import { scrollbar } from './scroll'
import ScrollTrigger from "gsap/ScrollTrigger";


function App() {
  const appRef = useRef();

  useEffect(() => {
    scrollbar.addListener(ScrollTrigger.update);

    return () => {
      scrollbar.removeListener(ScrollTrigger.update)
      scrollbar.scrollTo(0, 0)
    }
  }, []);

  return (
    <div ref={appRef} className="App">
      <Navbar />
      <Hero />
      <Form />
    </div>
  );
}

export default App;
