import { useState } from "react";
import Notification from "../components/Notification";

const SettingsPage = () => {
  const [activeNotification, setActiveNotification] = useState(false);

  const clearChat = () => {
    localStorage.removeItem("messages");
    setActiveNotification(true);
  };

  return (
    <div className="w-[80%] md:w-[40%] m-auto my-10 flex flex-col h-[94vh] justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p>Темная тема </p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="flex justify-between">
          <p>Язык </p>
          <select name="" id="" disabled="disabled">
            <option value="">Русский</option>
            <option value="">Казахский</option>
            <option value="">Английсский</option>
          </select>
        </div>
      </div>
      <button
        className="p-2 bg-red-600 rounded-md text-white shadow-lg"
        onClick={clearChat}
      >
        Очистить чат
      </button>
      <Notification
        text={"Настройки успешно обновлены"}
        activeNotification={activeNotification}
        setActiveNotification={setActiveNotification}
      />
    </div>
  );
};

export default SettingsPage;
