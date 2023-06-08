import "./assets/styles/css-reset.scss";
import "./assets/styles/app.scss";
import PaintingPage from "./components/pages/painting/PaintingPage";
import JourneyPage from "./components/pages/journey/JourneyPage";
import JourneyBuilderPage from "./components/pages/journeyBuilder/JourneyBuilderPage";

function App() {
  return (
    <div className="App">
      {/* <JourneyPlannerPage /> */}
      <PaintingPage />

    </div>
  );
}

export default App;
