import { MoonIcon, SunIcon } from "lucide-react";

function ThemeToggle({isDarkMode, setIsDarkMode}) {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      <SunIcon
        size={20}
        className={isDarkMode ? "opacity-50" : "opacity-100"}
      />
      <MoonIcon
        size={20}
        className={isDarkMode ? "opacity-100" : "opacity-50"}
      />
    </button>
  );
}

export default ThemeToggle;
