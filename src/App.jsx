import "./App.css";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Intro greeting="Hai kawan semua 👋🏼" explanation="Web sederhana ini dibuat dengan React" />
      <Footer />
    </>
  );
}

export default App;
