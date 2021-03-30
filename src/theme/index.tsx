import React, { FC } from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components/native';

import { colors } from './colors';
import { fontSizes, normalizeWidth, normalizeHeight, windowSizes } from './sizes';

const theme: DefaultTheme = {
	colors,
	fontSizes,
	windowSizes,
	normalizeWidth,
	normalizeHeight,
};

export const Theme: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
