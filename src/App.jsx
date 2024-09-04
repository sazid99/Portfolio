import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar/>
      <Navbar/>
      <HeroSection/>
      <HeroSection/>
    </>
  );
}

export default App;
