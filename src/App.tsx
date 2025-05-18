import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/ContactPage";
import Layout from "./components/Layout";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <SEO />
          {/* <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="flex flex-col h-full justify-between">
              <img
                className="w-full h-[670px]"
                alt="Header gradient"
                src="/header-gradient.svg"
              />
            </div>
          </div> */}
          {/* <div className="min-h-screen max-w-4xl text-gray-900 dark:text-white mx-auto "> */}
          {/* Main content */}
          {/* <Header /> */}
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route
                path="/services"
                element={
                  <Navigate
                    to="https://gray-tarsier-942800.hostingersite.com/"
                    replace
                  />
                }
              />{" "}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          {/* <Footer /> */}
          {/* </div> */}
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
