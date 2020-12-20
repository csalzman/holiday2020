import { useState } from "react";
import cn from "classnames";

const HolidayButton = (props) => {
  const [depressed, setDepressed] = useState(false);
  const { buttonOption } = props;

  const clickHandler = () => {
    buttonOption.clickHandle();
    setDepressed(!depressed);
  };

  return (
    <button
      className={cn(
        "p-1 m-1 md:py-4 md:m-3 rounded-lg",
        "border-4 border-red-400",
        "bg-red-600 text-white", // Normal
        "hover:bg-red-900 hover:text-white", // Hover
        depressed ? "bg-green-900 text-white border-green-400" : "" // Active
      )}
      onClick={() => {
        clickHandler();
      }}
    >
      {buttonOption.name}
    </button>
  );
};

export default HolidayButton;
