import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntroScreen1 } from "./Pages/IntroScreen1";
import { IntroScreen2 } from "./Pages/IntroScreen2";
import { IntroScreen3 } from "./Pages/IntroScreen3";
import { InstructionScreen } from "./Pages/InstructionScreen";
import { ActivityScreen } from "./Pages/ActivityScreen";
import { RewardScreen } from "./Pages/RewardScreen";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<IntroScreen1 />}
          />
          <Route
            path="/intro2"
            element={<IntroScreen2 />}
          />
          <Route
            path="/intro3"
            element={<IntroScreen3 />}
          />
          <Route
            path="/intructions"
            element={<InstructionScreen />}
          />
          <Route
            path="/activity"
            element={<ActivityScreen />}
          />
          <Route
            path="/reward"
            element={<RewardScreen />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
