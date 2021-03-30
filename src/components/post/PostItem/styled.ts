import styled from 'styled-components/native';

import PlaceholderImage from '../../image/PlaceholderImage';

export const Content = styled.TouchableOpacity`
	flex: 1;
	width: ${({ theme }) => theme.windowSizes.totalWidth - 40}px;
	padding-bottom: 10px;
	margin-bottom: 10px;
	border-bottom-width: 0.3px;
	border-bottom-color: ${({ theme }) => theme.colors.silver};
`;

export const BoxHorizontal = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 5px 0px;
`;
export const BoxVertical = styled.View`
	flex-direction: column;
	flex: 1;
	justify-content: space-between;
	/* width: ${({ theme }) => theme.windowSizes.totalWidth - 180}px; */
`;

export const BoxPostTag = styled.View<{ color: string }>`
	background-color: ${({ color }) => color};
	border-radius: 5px;
	align-self: baseline;
	margin-top: 10px;
	margin-bottom: 5px;
`;

export const PostTag = styled.Text<{ color: string }>`
	font-family: 'Quicksand-Bold';
	font-size: ${({ theme }) => theme.fontSizes.mini}px;
	color: ${({ color }) => color};
	padding: 5px 10px;
`;

export const PostTitle = styled.Text.attrs({
	numberOfLines: 2,
})`
	font-family: 'Quicksand-Bold';
	font-size: ${({ theme }) => theme.fontSizes.small}px;
	color: ${({ theme }) => theme.colors.text};
`;

export const PostSummary = styled.Text.attrs({
	numberOfLines: 2,
})`
	font-family: 'Quicksand-light';
	font-size: ${({ theme }) => theme.fontSizes.xsmall}px;
	color: ${({ theme }) => theme.colors.text};
`;

export const PostAuthor = styled.Text`
	font-family: 'Quicksand-Bold';
	font-size: ${({ theme }) => theme.fontSizes.xsmall}px;
	color: ${({ theme }) => theme.colors.text};
`;

export const PostDate = styled.Text`
	font-family: 'Quicksand-Regular';
	font-size: ${({ theme }) => theme.fontSizes.xsmall}px;
	color: ${({ theme }) => theme.colors.text};
`;

export const PostImage = styled.Image`
	/* margin-left: 25px; */
	border-radius: 10px;
`;
