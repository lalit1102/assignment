import { useTheme } from "../../../context/ThemeContext";

const ThemedBox = () => {
  const { theme } = useTheme();

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
      <p className="text-lg">Current Theme: <b>{theme}</b></p>
    </div>
  );
};

export default ThemedBox;
