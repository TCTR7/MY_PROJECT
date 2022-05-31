import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User"

function App() {
  return (
    <Router>
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/user' element={< User />}></Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
