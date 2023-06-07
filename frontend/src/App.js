import JourneyPlannerPage from "./components/pages/journeyPlanner/JourneyPlannerPage";
import "./assets/styles/css-reset.scss";
import "./assets/styles/app.scss";
import PaintingPage from "./components/pages/painting/PaintingPage";

function App() {
  return (
    <div className="App">
      {/* <JourneyPlannerPage /> */}
      <PaintingPage />
    </div>
  );
}

export default App;
