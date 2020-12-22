import "./App.css";
import { useState } from "react";
import HappyFamily from "./components/HappyFamily";
import Snow from "./components/Snow";
import HolidayButton from "./components/HolidayButton";
import cn from "classnames";
import { Helmet } from "react-helmet";

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

  const decidePrimaryColors = () => {
    let background = "bg-white";
    let text = "text-black";
    let font = "font-display";

    // Trying times
    if (tryingTimesState) {
      // And let it snow
      if (letItSnowState) {
        background = "bg-blue-900";
        text = "text-black";
        console.log("HIT");
        font = "font-mellow";
      }
      // Only Trying Times
      if (!letItSnowState) {
        background = "bg-gray-500";
        text = "text-black";
        font = "font-sans";
      }
    }

    // Let it snow and not trying times
    if (letItSnowState && !tryingTimesState) {
      background = "bg-blue-400";
      text = "text-blue-900";
    }

    return `${background} ${text} ${font}`;
  };

  return (
    <div className={cn("md:p-10 transition-all", decidePrimaryColors())}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>🎄 2020 Salzman Holiday Card 🎄</title>
        <link rel="canonical" href="https://chrissalzman.com" />
      </Helmet>
      <div className="min-h-screen ">
        <div
          className={cn(
            "App flex flex-col md:flex-row content-center items-center md:items-start m-auto max-w-7xl ",
            decidePrimaryColors()
          )}
        >
          {letItSnowState && <Snow />}
          {/* Holiday Options */}
          <div className="flex flex-col mt-8 md:mt-0 md:mr-8">
            <h2 className="hidden md:block text-2xl">Holiday Options</h2>
            <div className="flex flex-row md:flex-col justify-items-center m-auto">
              {buttonOptions.map((buttonOption) => {
                return <HolidayButton buttonOption={buttonOption} />;
              })}
            </div>
          </div>
          {/* Card */}
          <HappyFamily
            title={`Merry Christmas!`}
            subHead="Betsy, Chris, Scout, and Caspian Salzman"
            imgSrc="../FamilyPhotos-3.jpg"
            tryingTimesState={tryingTimesState}
            tooCoolState={tooCoolState}
            letItSnowState={letItSnowState}
          />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default App;
