// import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <div>
        <main className=" mb-80">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/reservation" element={<Reservation />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
