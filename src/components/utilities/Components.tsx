import React from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";

export const Switch = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext)

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={theme === 'light'} onChange={() => toggleTheme()} className="sr-only peer" />
      <div
        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      >
      </div>
    </label>
  );
};

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  // type?: React.ComponentProps<'button'>;
}

export const Button: React.FC<Props> = ({ children, ...buttonProps }) => {
  return (

    <button className="button"{...buttonProps}>
      {children}
    </button>

  )
}



