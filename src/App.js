import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Component from "./Component";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Component />} path="/users"></Route>
          <Route element={<Component />} path="/"></Route>
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
