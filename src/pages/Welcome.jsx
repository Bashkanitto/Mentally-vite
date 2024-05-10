import { ArrowRight } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Welcome() {
  const [isModalOpen, setIsModalOpen] = useState();
  const [isSignIn, setisSignIn] = useState(false);

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
      setTimeout(() => {}, 3000);
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
          className="modal flex flex-col justify-center items-center p-4 md:p-10 top-1/3 left-[40%] rounded-xl bg-white  m-2 w-full md:w-[500px] h-[300px]"
        >
          {!isSignIn ? (
            <div className="flex flex-col gap-2">
              <button
                className="p-2 duration-200 bg-purple-300 text-white rounded-md hover:bg-transparent hover:border-purple-300 hover:border-2 hover:text-black"
                onClick={() => setisSignIn(true)}
              >
                Авторизоватся
              </button>
              <button
                onClick={() => (window.location.href = "/chat")}
                className="p-2 duration-200  border-2 border-purple-300 rounded-md hover:bg-purple-300 hover:text-white"
              >
                Войти как гость
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl mb-2 md:text-4xl">Авторизация</h2>
              <input
                type="email"
                name="email"
                className=" p-3 my-2 rounded-md border-b"
                placeholder="Enter E-mail"
              />
              <input
                type="password"
                name="password"
                className="p-3 rounded-md border-b my-5"
                placeholder="Enter Password"
              />
              <button className="bg-violet-200 rounded-md mb-4" type="submit">
                Подтвердить
              </button>
            </>
          )}
        </form>
      </div>

      <div className="main p-2">
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
