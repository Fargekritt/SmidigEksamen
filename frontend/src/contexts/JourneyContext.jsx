import { createContext, useState } from "react";

const JourneyContext = createContext();

const JourneyProvider = ({ children }) => {
  const [journeyData, setJourneyData] = useState(null);

  return (
    <JourneyContext.Provider value={{ journeyData, setJourneyData }}>
      {children}
    </JourneyContext.Provider>
  );
};

export { JourneyContext, JourneyProvider };
