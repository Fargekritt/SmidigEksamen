import JourneyPlannerPage from "./components/pages/journeyPlanner/JourneyPlannerPage";
import "./assets/styles/css-reset.scss";
import "./assets/styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<FrontPage />}></Route> */}
          <Route path="create" element={<JourneyPlannerPage />}></Route>
          {/* <Route path="journey" element={<JourneyPage />}>
          <Route path=":journeyId" element={<JourneyPage />}></Route>
          </Route>
          <Route path="painting" element={<PaintingPage />}>
            <Route path=":paintingId" element={<PaintingPage />}></Route>
          </Route> */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
