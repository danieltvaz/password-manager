import darkTheme from './dark';
import lightTheme from './light';
import {Appearance} from 'react-native';

export type Theme = typeof lightTheme;

const theme: Theme = Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;

export default theme;
