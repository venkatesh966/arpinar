import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Teaching } from "./components/Pages/Teaching";
import "./App.css"; // Import the CSS file for App.js

function App() {
  return (
    <>
      <Router>
        <div style={{ width: "65%", margin: "auto" }}>
          <NavBar />
          <div style={{ display: "flex", height: "inherit" }}>
            {/* Profile Card */}
            <div
              id="profile_card"
              style={{
                width: "20%",
                height: 340,
                padding: "20px",
                backgroundColor: "#f1f1f1",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginRight: "20px",
              }}
            >
             <img
  id="profile_image"
  src="/arpinar_0.jpg"
  alt="Dr. Arpinar"
  style={{
    width: "100%",
    borderRadius: "50%",
    marginBottom: "10px",
  }}
/>

              <ul id="profile_items" style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <i className="fas fa-home fa-fw"></i>
                  <a href="https://minsuk.com">arpinar.com</a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <i className="fas fa-envelope fa-fw"></i>
                  <a href="mailto:kahng@google.com">arpinar@google.com</a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <i className="fas fa-graduation-cap fa-fw"></i>
                  <a href="https://scholar.google.com/citations?hl=en&amp;user=vieI1GYAAAAJ">
                    Google Scholar
                  </a>
                </li>
                <li>
                  <i className="fab fa-twitter fa-fw"></i>
                  <a href="https://www.twitter.com/minsukkahng">Twitter</a>
                </li>
              </ul>
            </div>

            {/* Main Content */}
            <div style={{ width: "80%" }}>
              <div className="pages">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/teaching" element={<Teaching />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
