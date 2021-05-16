import { useEffect, useState, useCallback } from 'react';
import Theme from 'enums/Theme';

const useDarkMode = (): [string, () => void] => {
  const [theme, setTheme] = useState<string>(Theme.Light);

  const setMode = useCallback((mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
    document.body.className = mode;
  }, []);

  const themeToggler = (): void => {
    theme === Theme.Light ? setMode(Theme.Dark) : setMode(Theme.Light);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode(Theme.Light);
  }, [setMode]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return [theme, themeToggler];
};

export default useDarkMode;
