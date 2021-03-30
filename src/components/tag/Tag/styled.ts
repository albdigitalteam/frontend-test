import styled from 'styled-components/native';

export const BoxPostTag = styled.View<{ color: string }>`
	background-color: ${({ color }) => color};
	border-radius: 5px;
	align-self: baseline;
	margin-top: 10px;
	margin-bottom: 5px;
`;

export const PostTag = styled.Text<{ color: string; size: 'small' | 'medium' }>`
	font-family: 'Quicksand-Bold';
	font-size: ${({ theme, size }) => (size === 'medium' ? theme.fontSizes.xsmall : theme.fontSizes.mini)}px;
	color: ${({ color }) => color};
	padding: 5px 10px;
`;
