import JourneyBuilderPage from "./components/pages/journeyBuilder/JourneyBuilderPage";
import JourneyPage from "./components/pages/journey/JourneyPage";
import PaintingPage from "./components/pages/painting/PaintingPage";
import FrontPage from "./components/pages/frontPage/FrontPage";
import "./assets/styles/css-reset.scss";
import "./assets/styles/app.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import CanvasMap from "./components/pages/journey/CanvasMap";

function App() {
  return (
    <div className="App">
      {/* <CanvasMap></CanvasMap> */}
      <BrowserRouter>
        <header className="temp-header">
          <p>TEMP HEADER FOR DEV NAVIGATION</p>
          <nav>
            <ul>
              <Link to="/">FrontPage</Link>
              <Link to="create">CreateJourney</Link>
              <Link to="journey">Journey</Link>
              <Link to="painting">Painting</Link>
              <Link to="*">NotFound</Link>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<FrontPage />}></Route>
          <Route path="create" element={<JourneyBuilderPage />}></Route>
          <Route path="journey" element={<JourneyPage />}>
            <Route path=":journeyId" element={<JourneyPage />}></Route>
          </Route>
          <Route path="painting" element={<PaintingPage />}>
            <Route path=":paintingId" element={<PaintingPage />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
