import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import { useState } from "react";

function App() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [activeNotification, setActiveNotification] = useState(true);

  return (
    <>
      <Sidebar
        activeNotification={activeNotification}
        setActiveNotification={setActiveNotification}
        promptIndex={promptIndex}
        setPromptIndex={setPromptIndex}
      />
      <Routes>
        <Route
          path="/"
          element={<Welcome setActiveNotification={setActiveNotification} />}
        />
        <Route
          path="/chat"
          element={
            <Chat promptIndex={promptIndex} setPromptIndex={setPromptIndex} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
