import "./styles.css";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routing />
        <Footer />
      </div>
    </>
  );
}
