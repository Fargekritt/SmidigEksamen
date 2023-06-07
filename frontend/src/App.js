import JourneyPlannerPage from "./components/pages/journeyPlanner/JourneyPlannerPage";
import "./assets/styles/css-reset.scss";
import "./assets/styles/app.scss";
import WrapUpPage from "./components/pages/wrapUp/WrapUpPage";

function App() {
  return (
    <div className="App">
      {/* <JourneyPlannerPage /> */}
      <WrapUpPage />
    </div>
  );
}

export default App;
