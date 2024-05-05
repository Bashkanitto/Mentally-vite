import { X } from "lucide-react";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Notification = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 5000);
  }, []);

  return (
    <div
      style={{
        transform: active ? "translateX(0px)" : "translateX(-400px)",
      }}
      className=" duration-200 absolute top-1/2 z-20 text-white left-0 w-[300px] bg-[#7061D0] p-4"
    >
      <p>
        Пока вас не было, подготовил пару практических советов по улучшению
        навыков общения и выражения...
      </p>
      <div className="notification-btns flex justify-end gap-5">
        <button onClick={() => setActive(false)}>Принять</button>
        <button>
          <X />
        </button>
      </div>
    </div>
  );
};

export default Notification;
