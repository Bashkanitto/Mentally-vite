import { LogOut, Settings } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const isAuthorized = user != "null";

  function logOut() {
    localStorage.setItem("user", "null");
    window.location.href = "/";
  }

  return (
    <footer
      style={{
        color: "black",
        background: isAuthorized ? "#a192ff9c" : "#19191980",
      }}
    >
      <p>{user}</p>
      <div className="btns">
        <button>
          <Settings />
        </button>
        <button onClick={logOut}>
          <LogOut />
        </button>
      </div>
    </footer>
  );
};
