import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from '../redux/slices/themeSlice';
import { useEffect } from 'react';

export const useTheme = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();

  const toggle = () => dispatch(toggleTheme());
  const set = theme => dispatch(setTheme(theme));

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return { isDark, toggle, set };
};
