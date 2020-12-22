import cn from "classnames";

const HappyFamily = (props) => {
  const { title, subHead, imgSrc, tryingTimesState, tooCoolState } = props;

  return (
    <div
      className={cn(
        "rounded-xl p-10 shadow-2xl",
        tryingTimesState ? "bg-black" : "bg-blue-400"
      )}
    >
      <div className={cn("rounded-xl p-4 bg-white shadow-inner")}>
        <h1 className="w-3/4 m-auto text-4xl">
          {tryingTimesState ? `Despite it all ... happy holidays.` : title}
        </h1>

        <div className="relative m-auto p-2">
          <img
            src={imgSrc}
            className={cn(
              "relative rounded-xl shadow-lg",
              tryingTimesState ? "filter-grayscale" : ""
            )}
          />
          <img
            src="../test.png"
            className={cn(
              !tooCoolState ? "transform -translate-y-64 opacity-0" : "",
              "absolute top-0 left-0 transition-all ease-in duration-500 transform translate-y-0"
            )}
          />
        </div>
        <h2 className="text-3xl">
          {tryingTimesState ? `May 2021 be better` : subHead}
        </h2>
      </div>
    </div>
  );
};

export default HappyFamily;
