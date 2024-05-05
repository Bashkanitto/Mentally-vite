import { useState } from "react";
import { prompts } from "./prompts";

// eslint-disable-next-line react/prop-types
const CustomSelect = ({ setPromptIndex, promptIndex, isAuthorized }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleButton}
        style={{
          color: isAuthorized ? "black" : "white",
          background: "#7061D033",
        }}
        className="absolute top-[20px] w-[190px] rounded-md flex  items-center gap-2 overflow-hidden left-4 p-1 z-40 text-white"
      >
        <img
          className="rounded-full"
          src={prompts[promptIndex].img}
          width={20}
        />
        <p className="text-xs text-nowrap overflow-hidden">
          {prompts[promptIndex].name}
        </p>
      </button>
      <div
        style={{ display: isOpen ? "flex" : "none" }}
        className="absolute top-[50px] left-4 rounded-md bg-[#e4e0ff] z-40 flex flex-col gap-2 p-2"
      >
        {prompts.map((item) => (
          <div
            onClick={() => {
              setPromptIndex(item.id);
              setIsOpen(false);
            }}
            className="flex items-center gap-2 text-xs cursor-pointer"
            key={item.id}
          >
            <img
              src={item.img}
              width={20}
              className="w-5 rounded-full"
              alt={item.name}
            />
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomSelect;
