import CurrentlyBoard from "./components/currentlyBoard";
import ThemeToggle from "./components/ThemeToggle"; // Add this import
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <CurrentlyBoard />
      </main>
    </div>
  );
}

export default App;
