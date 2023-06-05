import JourneyPlannerPage from "./components/pages/journeyPlanner/JourneyPlannerPage";
import "./assets/styles/css-reset.scss";
import "./assets/styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="build" element={<JourneyPlannerPage />}></Route>
          <Route path="journey" element={<JourneyPage />}>
            <Route path=":journeyId" element={<JourneyPage />}></Route>
          </Route>
          <Route path="artwork" element={<ArtworkPage />}>
            <Route path=":artworkId" element={<ArtworkPage />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter> */}
      <JourneyPlannerPage />
    </div>
  );
}

export default App;
