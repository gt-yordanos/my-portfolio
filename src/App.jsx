// src/App.jsx
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Layout />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
