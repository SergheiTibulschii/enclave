import Hero from "./containers/Hero";
import Form from "./containers/Form";
import Navbar from "./containers/Navbar";
import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef } from "react";

function App() {
  const appRef = useRef();

  useEffect(() => {
    Scrollbar.init(appRef.current);
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
