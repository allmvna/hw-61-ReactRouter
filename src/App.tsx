import "./App.css";
import Navigation from "./components/Navigation/Navigation.tsx";
import {Route, Routes} from "react-router-dom";
import Films from "./containers/Films/Films.tsx";
import Books from "./containers/Books/Books.tsx";
import Music from "./containers/Music/Music.tsx";
import Portfolio from "./containers/Portfolio/Portfolio.tsx";

const App = () => {
  return (
      <>
          <Navigation />
          <Routes>
              <Route path="/" element={<Films/>} />
              <Route path="/books" element={<Books/>} />
              <Route path="/music" element={<Music/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
          </Routes>
      </>
      )
};

export default App;
