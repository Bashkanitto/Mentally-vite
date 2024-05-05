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
  function handleChoose() {
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
          width={30}
          height={30}
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
          className="option"
        >
          {!optionOpen && (
            <p className="flex items-center">
              Вы выбрали понимающего собеседника, вы можете переключиться в
              любой момент <ArrowLeft />
            </p>
          )}
          {optionOpen && (
            <>
              <div className="avatar mr-40">
                <img
                  src={`${prompts[promptIndex].img}`}
                  width={300}
                  height={300}
                  alt="choose ai"
                />
                <button className="chooseAvatarBtn" onClick={handleChoose}>
                  <ArrowRight />
                  Выбрать
                </button>
              </div>
              <div className="grid grid-cols-2 gap-10">
                {prompts.map((item) => (
                  <button
                    className="z-20"
                    onClick={() => setPromptIndex(item.id)}
                    key={item.id}
                  >
                    <img src={item.img} alt="" />
                  </button>
                ))}
              </div>
              <div className="rings"></div>
              <div className="rings2"></div>
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
