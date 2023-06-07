import JourneyPlannerPage from "./components/pages/journeyPlanner/JourneyPlannerPage";
import "./assets/styles/css-reset.scss";
import "./assets/styles/app.scss";
import JourneyPage from "./components/pages/journey/JourneyPage";

function App() {
  return (
    <div className="App">
      {/* <JourneyPlannerPage /> */}
      <JourneyPage />
    </div>
  );
}

export default App;
