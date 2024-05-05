import axios from "axios";
import { ArrowRight, Mic } from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";
import Message from "../components/Message";
import { prompts } from "../components/prompts.js";

// eslint-disable-next-line react/prop-types
const Chat = ({ promptIndex, setPromptIndex }) => {
  const [user] = useState(localStorage.getItem("user"));
  const scrollContainerRef = useRef(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      setMessages([
        {
          id: 1,
          isMe: false,
          text: `Отлично, ${user}! Теперь у меня есть возможность подстроиться под Ваши предпочтения. Выберите мне один из образов, который больше всего Вам подхойдет, и я буду общаться с Вами в этом стиле: `,
          option: true,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("messages", JSON.stringify(messages));
    };

    // Adding event listener for beforeunload to save messages
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [messages]);

  const scrollToBottom = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  const addMessage = (text, isMe, option) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, isMe, option, text },
    ]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target[0].value;
    if (!userInput) return;

    addMessage(userInput, true);
    handleSendMessage(e);

    e.target[0].value = "";
  };

  const handleSendMessage = async (e) => {
    const prompt = prompts[promptIndex].prompt;
    try {
      const response = await axios.post(
        "https://gpt-backend-production.up.railway.app/api/request",
        {
          prompt: `${prompt}, вот промпт - ${e.target[0].value}`,
        }
      );
      const receivedAnswer = response.data.choices[0].message.content;
      addMessage(receivedAnswer, false);
    } catch (error) {
      console.error("Backend error:", error);
    }
  };

  return (
    <Suspense fallback={"loading..."}>
      <div className="chat">
        <div className="messages" ref={scrollContainerRef}>
          {messages.map((item) => (
            <Message
              setPromptIndex={setPromptIndex}
              promptIndex={promptIndex}
              key={item.id}
              isMe={item.isMe}
              text={item.text}
              option={item.option}
            />
          ))}
        </div>
        <form onSubmit={handleSubmit} className="inputs">
          <input placeholder="Расскажите что угодно" type="text" />
          <button className="mic" type="button">
            <Mic />
          </button>
          <button className="hidden md:flex" type="submit">
            Отправить
          </button>
          <button
            className="flex md:hidden w-[35px] h-[35px] items-center"
            type="submit"
          >
            <ArrowRight />
          </button>
        </form>
      </div>
    </Suspense>
  );
};

export default Chat;
