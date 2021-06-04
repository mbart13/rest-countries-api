import { useEffect, useState } from 'react';
import Theme from 'enums/Theme';
import { useMediaPredicate } from 'react-media-hook';

const useDarkMode = (): [string, () => void] => {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)')
    ? Theme.Dark
    : Theme.Light;
  const [theme, setTheme] = useState<string>(
    window.localStorage.getItem('theme') || preferredTheme
  );

  const themeToggler = (): void => {
    theme === Theme.Light ? setTheme(Theme.Dark) : setTheme(Theme.Light);
  };

  useEffect(() => {
    document.body.className = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, themeToggler];
};

export default useDarkMode;
