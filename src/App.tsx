import * as React from 'react';
import Home from 'src/pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);
  return (
    <Home />
  );
}

export default App
