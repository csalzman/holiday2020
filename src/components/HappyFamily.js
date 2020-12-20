import cn from "classnames";

const HappyFamily = (props) => {
  const { title, subHead, imgSrc, tryingTimesState, tooCoolState } = props;

  return (
    <div className="">
      <h1 className="w-3/4 m-auto text-5xl my-4">
        {tryingTimesState
          ? `Despite it all we wish you a happy holidays`
          : title}
      </h1>

      <div className="relative m-auto">
        <img
          src={imgSrc}
          className={cn(
            "relative ",
            tryingTimesState ? "filter-grayscale" : ""
          )}
        />
        <img
          src="../test.png"
          className={cn(
            !tooCoolState ? "transform -translate-y-64 opacity-0" : "",
            "absolute top-0 left-0 transition-all transform translate-y-0"
          )}
        />
      </div>
      <h2>{tryingTimesState ? `May 2021 be better` : subHead}</h2>
    </div>
  );
};

export default HappyFamily;
