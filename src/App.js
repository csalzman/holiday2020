import "./App.css";
import { useState } from "react";
import HappyFamily from "./components/HappyFamily";
import Snow from "./components/Snow";
import cn from "classnames";

const App = () => {
  const [tryingTimesState, setTryingTimesState] = useState(false);
  const [letItSnowState, setLetItSnowState] = useState(false);
  const [tooCoolState, setTooCoolState] = useState(false);

  const tryingTimes = () => {
    console.log("clicked");
    setTryingTimesState(!tryingTimesState);
  };

  const letItSnow = () => {
    console.log("clicked");
    setLetItSnowState(!letItSnowState);
  };

  const tooCool = () => {
    console.log("clicked");
    setTooCoolState(!tooCoolState);
  };

  const buttonOptions = [
    { name: "In These Trying Times", clickHandle: tryingTimes },
    { name: "Let it Snow", clickHandle: letItSnow },
    { name: "Too Cool", clickHandle: tooCool },
  ];

  return (
    <div
      className={cn("h-screen md:p-10", letItSnowState ? "bg-blue-100" : "")}
    >
      <div
        className={cn(
          "App flex flex-col md:flex-row content-center items-center md:items-start m-auto max-w-7xl",
          letItSnowState ? "bg-blue-100" : ""
        )}
      >
        {letItSnowState && <Snow />}
        <HappyFamily
          title="Happy Holidays"
          subHead="From the Salzmans"
          imgSrc="../FamilyPhotos-3.jpg"
          tryingTimesState={tryingTimesState}
          tooCoolState={tooCoolState}
        />

        <div className="bg-black text-white flex flex-col mx-8">
          <h2>Holiday Options</h2>
          <div className="flex flex-row md:flex-col align-middle items-middle">
            {buttonOptions.map((button) => {
              return (
                <button
                  className="p-4 bg-white text-black rounded-lg m-4 hover:text-white hover:bg-black border-4 border-white"
                  onClick={button.clickHandle}
                >
                  {button.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
