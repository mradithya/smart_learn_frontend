import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./componets/Home/Home.jsx";
import Courses from "./componets/Courses/Courses.jsx";
import "./App.css";
import Header from "./componets/Layout/Header/Header.jsx";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/courses" element={<Courses />}/>
      </Routes>
    </Router>
  );
}

export default App;
