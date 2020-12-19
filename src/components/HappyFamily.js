import cn from "classnames";

const HappyFamily = (props) => {
  const { title, subHead, imgSrc, tryingTimesState, tooCoolState } = props;

  return (
    <div className="">
      <h1>
        {tryingTimesState
          ? `Despite it all we wish you a happy holidays`
          : title}
      </h1>
      <img
        src={imgSrc}
        className={cn(
          "m-auto m-10 p-10 border border-8 border-black",
          tryingTimesState ? "filter-grayscale" : ""
        )}
      />
      <h2>{tryingTimesState ? `May 2021 be better` : subHead}</h2>
    </div>
  );
};

export default HappyFamily;
