import Dock from "./components/Dock";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Dock />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 */}
      </Routes>
      <div className="bg-transparent h-20"></div>
    </>
  );
}
