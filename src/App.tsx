import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import SEO from "./components/SEO";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/ContactPage";
import RedirectToExternal from "./pages/RedirectToExternal";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <SEO />
          <div className="">
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/services" element={<RedirectToExternal />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
