import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeBtn() {
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex items-center justify-center w-10 h-10 rounded-full
      bg-gray-200 dark:bg-gray-800
      transition-all duration-500 hover:scale-110"
    >
      {/* Sun */}
      <Sun
        className={`absolute text-yellow-500 transition-all duration-500
        ${dark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
        size={20}
      />

      {/* Moon */}
      <Moon
        className={`absolute text-blue-400 transition-all duration-500
        ${dark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
        size={20}
      />
    </button>
  );
}
