import styled from 'styled-components/native';

export const ButtonStyled = styled.TouchableOpacity<{ color?: string }>`
	justify-content: center;
	align-items: center;
	align-content: center;
	background-color: ${({ theme, color }) => color || theme.colors.secundary};
	border-radius: 10px;
	margin: 10px;
	margin-top: 20px;
`;

export const ButtonText = styled.Text<{ textColor?: string; textSize: number }>`
	font-family: 'Quicksand-Bold';
	font-size: ${({ textSize }) => textSize}px;
	text-transform: uppercase;
	color: ${({ theme, textColor }) => textColor || theme.colors.text};
	padding: 12px;
`;
