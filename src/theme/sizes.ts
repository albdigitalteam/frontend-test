import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scaleWidth: number = SCREEN_WIDTH / 320;
const scaleHeight: number = SCREEN_HEIGHT / 480;

export const normalizeWidth = (size: number) => {
	const newSize = size * scaleWidth;
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	}
	return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const normalizeHeight = (size: number) => {
	const newSize = size * scaleHeight;
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	}
	return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const fontSizes = {
	xmini: normalizeWidth(8),
	mini: normalizeWidth(10),
	xsmall: normalizeWidth(12),
	small: normalizeWidth(15),
	medium: normalizeWidth(17),
	large: normalizeWidth(20),
	xlarge: normalizeWidth(24),
	xxlarge: normalizeWidth(30)
};

export const windowSizes = {
	totalWidth: SCREEN_WIDTH,
	totalHeight: SCREEN_HEIGHT
}

export type FontSizes = typeof fontSizes;
export type WindowSizes = typeof windowSizes;
export type NormalizeHeight = typeof normalizeHeight;
export type NormalizeWidth = typeof normalizeWidth;