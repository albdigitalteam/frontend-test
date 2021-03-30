import styled from 'styled-components/native';
import { EdgeInsets } from 'react-native-safe-area-context';

export const Container = styled.View<{ insets: EdgeInsets }>`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
	padding-top: ${({ insets }) => `${insets.top}px`};
	/* padding-bottom: ${({ insets }) => `${insets.bottom}px`}; */
	padding-bottom: 0px;
	padding-left: 5px;
	padding-right: 5px;
	justify-content: space-between;
	align-items: center;
	align-content: center;
`;

export const Row = styled.View`
	width: ${({ theme }) => theme.windowSizes.totalWidth - 40}px;
`;

export const BoxHorizontal = styled.View`
	flex-direction: row;
`;
export const BoxVertical = styled.View`
	flex-direction: column;
`;

export const CenterAll = styled.View`
	justify-content: center;
	align-items: center;
	align-content: center;
`;

export const TitlePage = styled.Text`
	font-family: 'Quicksand-Bold';
	font-size: ${({ theme }) => theme.fontSizes.xlarge}px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.textDark};
	padding: 12px;
`;

export const SubTitle = styled.Text`
	font-family: 'Quicksand-Bold';
	font-size: ${({ theme }) => theme.fontSizes.medium}px;
	color: ${({ theme }) => theme.colors.textDark};
`;

export const Content = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingBottom: 50,
	},
})`
	flex: 1;
	margin-top: 20px;
	width: ${({ theme }) => theme.windowSizes.totalWidth}px;
	background-color: ${({ theme }) => theme.colors.constrastBackground};
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	padding: 20px;
`;
