import { useState } from "react";
import CurrentlyBoard from "./components/currentlyBoard";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <CurrentlyBoard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </main>
    </div>
  );
}
export default App;
