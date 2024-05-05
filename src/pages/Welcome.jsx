import { ArrowRight } from "lucide-react";
import { useState } from "react";

function Welcome() {
  const [isModalOpen, setIsModalOpen] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target[0].value;
    if (userInput != "") {
      localStorage.setItem("user", userInput);
      setIsModalOpen(true);
    }
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const userInput = e.target[0].value;
    if (userInput != "") {
      window.location.href = "/chat";
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: isModalOpen ? "100vh" : "0",
        }}
        className="absolute top-0 left-0 fakeBg flex justify-center items-center"
      >
        <form
          onSubmit={handleEmail}
          style={{ display: isModalOpen ? "flex" : "none" }}
          className="modal flex flex-col justify-center items-center p-4 top-1/3 left-[40%] rounded-xl bg-white w-60 h-60"
        >
          <h2>Авторизация</h2>
          <input
            type="email"
            name="email"
            className="my-2 border-b"
            placeholder="Enter E-mail"
          />
          <input
            type="password"
            name="password"
            className="border-b my-5"
            placeholder="Enter Password"
          />
          <button className="bg-violet-200 rounded-md" type="submit">
            Подтвердить
          </button>
        </form>
      </div>

      <div className="main">
        <button className="introButton">
          Приветствую <ArrowRight />
        </button>
        <h1 className="text-[56px] md:text-[90px]">Я - Mentally</h1>
        <h2 className="w-full md:w-full">
          Я здесь чтобы выслушать вас, как к Вам обращаться?
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Напишите здесь..." />
          <button type="submit" className="startBtn">
            Начать
          </button>
        </form>
      </div>
    </>
  );
}

export default Welcome;
