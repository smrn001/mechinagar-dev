
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-mono">
      <Navbar />
      <Home />
      <FAQ />
      <Footer />
    </div>
  );
}
