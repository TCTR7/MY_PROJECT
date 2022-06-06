import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User"
import MainLayout from "./components/Layout/index"

function App() {
    return (
        <div className="App container-fluid fill-window">
            <Router>
                <MainLayout>
                    <Routes>
                        <Route exact path='/' element={< Home />}></Route>
                        <Route exact path='/about' element={< About />}></Route>
                        <Route exact path='/user' element={< User />}></Route>
                    </Routes>
                </MainLayout>
            </Router>
        </div>
    );
}

export default App;
