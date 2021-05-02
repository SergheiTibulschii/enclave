import Hero from "./containers/Hero";
import Form from "./containers/Form";
import Navbar from "./containers/Navbar";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

const bodyScrollBar = Scrollbar.init(document.body, {
  damping: 0.1,
  delegateTo: document,
});
ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});
ScrollTrigger.defaults({ scroller: document.body });
function App() {
  const appRef = useRef();

  useEffect(() => {
    bodyScrollBar.addListener(ScrollTrigger.update);

    return () => {
      bodyScrollBar.removeListener(ScrollTrigger.update)
      bodyScrollBar.scrollTo(0, 0)
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
