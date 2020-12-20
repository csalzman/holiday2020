import "./App.css";
import { useState } from "react";
import HappyFamily from "./components/HappyFamily";
import Snow from "./components/Snow";
import HolidayButton from "./components/HolidayButton";
import cn from "classnames";

const App = () => {
  const [tryingTimesState, setTryingTimesState] = useState(false);
  const [letItSnowState, setLetItSnowState] = useState(false);
  const [tooCoolState, setTooCoolState] = useState(false);

  const tryingTimes = () => {
    setTryingTimesState(!tryingTimesState);
  };

  const letItSnow = () => {
    setLetItSnowState(!letItSnowState);
  };

  const tooCool = () => {
    setTooCoolState(!tooCoolState);
  };

  const buttonOptions = [
    { name: "In These Trying Times", clickHandle: tryingTimes },
    { name: "Let it Snow", clickHandle: letItSnow },
    { name: "Too Cool", clickHandle: tooCool },
  ];

  return (
    <div
      className={cn(
        "h-screen md:p-10 transition-all",
        "bg-white text-black",
        letItSnowState ? "bg-blue-400 text-white" : ""
      )}
    >
      <div
        className={cn(
          "App flex flex-col md:flex-row content-center items-center md:items-start m-auto max-w-6xl",
          letItSnowState ? "bg-blue-400" : "bg-white"
        )}
      >
        {letItSnowState && <Snow />}
        <HappyFamily
          title={`Merry Christmas and a Happy New Year!`}
          subHead="Betsy, Chris, Scout, and Cas Salzman"
          imgSrc="../FamilyPhotos-3.jpg"
          tryingTimesState={tryingTimesState}
          tooCoolState={tooCoolState}
        />

        <div className="flex flex-col mx-8 m-auto border border-4 md:border-0">
          <h2 className="hidden md:block">Holiday Options</h2>
          <div className="flex flex-row md:flex-col align-middle items-middle w-full">
            {buttonOptions.map((buttonOption) => {
              return <HolidayButton buttonOption={buttonOption} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
