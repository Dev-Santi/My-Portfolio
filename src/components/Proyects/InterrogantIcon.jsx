import { AiFillQuestionCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const InterrogantIcon = () => {
  return (
    <div className="interrogantIcon">
      <IconContext.Provider
        value={{ color: "#5C5C5C", size: "clamp(1rem, 7vw, 3.5rem)" }}
      >
        <AiFillQuestionCircle />
      </IconContext.Provider>
    </div>
  );
};

export default InterrogantIcon;
