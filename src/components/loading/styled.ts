import LottieView from 'lottie-react-native';

import styled from 'styled-components/native';

export const Containter = styled.View`
	position: absolute;
	flex: 1;
	top: 0;
	left: -20px;
	width: ${({ theme }) => theme.windowSizes.totalWidth + 20}px;
	height: ${({ theme }) => theme.windowSizes.totalHeight}px;
	background-color: transparent;
	justify-content: center;
	align-items: center;
	align-content: center;
`;
export const LottieStyled = styled(LottieView)`
	display: flex;
	width: ${({ theme }) => theme.normalizeWidth(200)}px;
`;
