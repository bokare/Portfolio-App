import "./App.css";
import store from "./store/store";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contacts from "./Components/Contacts";
import { Provider } from "react-redux";
import {BrowserRouter,Route,Routes} from "react-router-dom";



function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/education" element={<Education />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/achievements" element={<Achievements />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
