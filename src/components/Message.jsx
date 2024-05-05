import {
  ArrowLeft,
  ArrowRight,
  Clipboard,
  RefreshCcw,
  ThumbsDown,
} from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";
import { Typed } from "react-typed";
import { prompts } from "./prompts";

// eslint-disable-next-line react/prop-types
const Message = ({ promptIndex, setPromptIndex, isMe, text, option }) => {
  const [optionOpen, setOptionOpen] = useState(true);
  const [prompt, setPrompt] = useState(0);

  function handleChoose() {
    setPromptIndex(prompt);
    setOptionOpen(false);
    option = false;
  }

  const [startAnimation] = useState(true);
  const elRef = useRef(null); // Create a ref for the container

  useEffect(() => {
    localStorage.getItem("messages") && setOptionOpen(false);
    if (startAnimation && elRef.current) {
      new Typed(elRef.current, {
        strings: [text],
        typeSpeed: 20,
        showCursor: false,
      });
    }
  }, [startAnimation]);
  return (
    <Suspense fallback={"Loading..."}>
      <div
        style={{
          flexDirection: isMe ? "row-reverse" : "row",
          textAlign: isMe ? "end" : "start",
        }}
        className="message"
      >
        <img
          src={isMe ? "/me.png" : `${prompts[promptIndex].img}`}
          className="rounded-full"
          alt="AI avatar"
        />
        {localStorage.getItem("messages") ? (
          <p>{text}</p>
        ) : (
          <span className="text-xs" ref={elRef} />
        )}
      </div>

      {/* option */}
      {option && (
        <div
          style={{
            height: optionOpen ? "300px" : "10px",
            background: optionOpen ? "transparent" : "#7061D0",
            color: "white",
          }}
          className="option w-full md:w-[85%]"
        >
          {!optionOpen && (
            <p className="flex items-center">
              Вы выбрали понимающего собеседника, вы можете переключиться в
              любой момент <ArrowLeft />
            </p>
          )}
          {optionOpen && (
            <>
              <div className="avatar mr-2 md:mr-40">
                <img
                  src={`${prompts[prompt].img}`}
                  className="person rounded-full"
                  alt="choose ai"
                />
                <p className="absolute">{prompts[prompt].name}</p>
                <button className="chooseAvatarBtn" onClick={handleChoose}>
                  <ArrowRight />
                  Выбрать
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {/* promptsColumn */}
                {prompts.map((item) => (
                  <button
                    className="z-20 hover:bg-[rgba(0,0,0,0.2)] rounded-lg"
                    onClick={() => setPrompt(item.id)}
                    key={item.id}
                  >
                    <img className="rounded-full" src={item.img} alt="" />
                  </button>
                ))}
              </div>
              {/* <div className="rings"></div> */}
              {/* <div className="rings2"></div> */}
            </>
          )}
        </div>
      )}

      {/* icons */}
      {isMe == false && (
        <div className="flex gap-2 ml-[60px]">
          <button>
            <Clipboard />
          </button>
          <button>
            <RefreshCcw />
          </button>
          <button>
            <ThumbsDown />
          </button>
        </div>
      )}
    </Suspense>
  );
};

export default Message;
