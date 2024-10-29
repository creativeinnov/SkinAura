// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import "./index.css"
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="982001509097-cg3u6n8vv4okp93c10co29sudhioq59b.apps.googleusercontent.com">
    <div className="App">
      <Navbar />
      <Carousel/>
      {/* <GetStartedButton/> */}
      <main className="main-content">
        <button className="get-started-button">
          <a href="https://www.google.co.in/search?q=">Get Started</a>
        </button>
      </main>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
