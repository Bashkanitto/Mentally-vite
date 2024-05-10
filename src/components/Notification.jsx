import { X } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Notification = ({ text, setActiveNotification, activeNotification }) => {
  return (
    <div
      style={{
        transform: activeNotification
          ? "translateX(0px)"
          : "translateX(-300px)",
      }}
      className=" duration-200 absolute top-1/2 z-20 text-white left-0 w-[300px] bg-[#7061D0] p-4"
    >
      <p className="mb-4">{text}</p>
      <div className="notification-btns flex justify-end gap-5">
        <button onClick={() => setActiveNotification(false)}>Принять</button>
        <button>
          <X />
        </button>
      </div>
    </div>
  );
};

export default Notification;
