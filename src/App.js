import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import Portfolio from "./pages/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
      setTimeout(() => {
        setcompleted(true);
      }, 1000);
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span>Loading...</span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      ) : (
        <>
          <Router>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <>
                    <Header />
                    <Home />
                    <Footer />
                  </>
                }
              />{" "}
              <Route
                path="/services"
                exact
                element={
                  <>
                    <Header />
                    <Services />
                    <Footer />
                  </>
                }
              />{" "}
              <Route
                path="/about"
                exact
                element={
                  <>
                    <Header />
                    <About />
                    <Footer />
                  </>
                }
              />{" "}
              <Route
                path="/contact"
                exact
                element={
                  <>
                    <Header />
                    <Contact />
                    <Footer />
                  </>
                }
              />{" "}
              <Route
                path="/portfolio"
                exact
                element={
                  <>
                    <Header />
                    <Portfolio />
                    <Footer />
                  </>
                }
              />
              <Route path="/*" exact element={<Dashboard />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
};

export default App;
