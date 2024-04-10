import "./App.css";
import { useGetQuery } from "./hooks/useGetQuery";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { getAllBlogs } from "./queries/getAllBlogs";
import { getBlogById } from "./queries/getBlogByID";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
