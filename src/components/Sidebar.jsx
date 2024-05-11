"use client";
import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Lightbulb,
  MessageCircle,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import CustomSelect from "./CustomSelect";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ setPromptIndex, promptIndex }) => {
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("user") == "null" ? true : false
  );
  const [user] = useState(localStorage.getItem("user"));
  let isAuthorized = user != "null";

  useEffect(() => {
    !localStorage.getItem("user") ? (window.location.href = "/") : null;
    !localStorage.getItem("user") && localStorage.setItem("user", null);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        style={{
          background: isAuthorized ? "#a192ff9c" : "#7061D033",
          transform: isOpen ? "translateX(-60px)" : "translateX(-4px)",
          color: isAuthorized ? "black" : "white",
        }}
        className="mobileButton absolute top-[20px] left-0 text-black "
      >
        <ChevronRight />
      </button>

      <div
        style={{
          background: isAuthorized ? "white" : "#3B383ECC",
          color: isAuthorized ? "black" : "white",
          transform: isOpen ? "translateX(0px)" : "translateX(-240px)",
        }}
        className="sidebar"
      >
        <CustomSelect
          promptIndex={promptIndex}
          setPromptIndex={setPromptIndex}
          isAuthorized={isAuthorized}
        />

        <div>
          {/* navigation */}
          <div className="navigation flex items-center mb-10">
            <button
              style={{
                background: isAuthorized ? "#a192ff9c" : "#7061D033",
              }}
              onClick={toggleSidebar}
              className="menuButton"
            >
              <ChevronLeft />
            </button>
          </div>

          {/* Notes */}
          <div className="notes mb-10">
            <p className="t-12 secondary ">Важные заметки</p>
            {/* <a href="#">
              <span className="secondary"> 12/04 - </span>Prepare for
              pshychol...
            </a>
            <a href="#">
              <span className="secondary"> 12/04 - </span>Практика самозабо...
            </a>
            <a href="#">
              <span className="secondary"> 12/04 - </span>Обучение коммуни...
            </a> */}
          </div>

          {/* navigation */}
          <nav>
            <ul className="flex flex-col gap-10">
              <li>
                <a href="/chat">
                  <MessageCircle />
                  Чат
                </a>
              </li>
              <li>
                <a href="/techWorks">
                  <Trophy />
                  Достижения
                </a>
              </li>
              <li>
                <a href="/techWorks">
                  <Lightbulb />
                  Полезные ресурсы
                </a>
              </li>

              <li>
                <a href="/techWorks">
                  <CircleDollarSign />
                  Тарифы и цены
                </a>
              </li>
              <li>
                <a href="/techWorks">
                  <BriefcaseBusiness />
                  Подобрать специалиста
                </a>
              </li>
            </ul>
          </nav>
          {isAuthorized && <Footer />}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
