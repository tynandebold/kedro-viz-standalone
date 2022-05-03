import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Component from "./Component";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Component />} path="/users"></Route>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
