import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import { useState } from "react";
import TechWorks from "./pages/TechWorks";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [activeNotification, setActiveNotification] = useState(false);

  return (
    <>
      <Sidebar promptIndex={promptIndex} setPromptIndex={setPromptIndex} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/chat"
          element={
            <Chat
              setActiveNotification={setActiveNotification}
              activeNotification={activeNotification}
              promptIndex={promptIndex}
              setPromptIndex={setPromptIndex}
            />
          }
        />
        <Route path="/techWorks" element={<TechWorks />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
