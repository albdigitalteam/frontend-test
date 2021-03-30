import { Colors } from '#root/src/theme/colors';
import styled from 'styled-components/native';

export const ContainerInput = styled.View<{ inputWidth: number }>`
	padding: 10px;
	width: ${({ inputWidth }) => inputWidth}px;
`;

export const InputLabel = styled.Text`
	font-family: 'Quicksand-SemiBold';
	font-size: ${({ theme }) => theme.fontSizes.xsmall}px;
	color: ${({ theme }) => theme.colors.text};
	margin-bottom: 10px;
`;

export const BoxInput = styled.View<{ focus: boolean; error: boolean; border?: boolean }>`
	background-color: ${({ theme }) => theme.colors.constrastBackground};
	border-radius: 10px;
	border-width: 2px;
	border-color: ${({ theme, focus, error, border }) =>
		focus || error ? theme.colors[error ? 'error' : 'secundary'] : border ? theme.colors.text : 'transparent'};
	flex-direction: row;
	align-items: center;
`;
export const BoxIcon = styled.TouchableOpacity`
	padding: 10px;
`;

export const InputStyled = styled.TextInput`
	flex: 1;
	padding: 15px;
	font-family: 'Quicksand-SemiBold';
	font-size: ${({ theme }) => theme.fontSizes.small}px;
	color: ${({ theme }) => theme.colors.text};
	border-radius: 10px;
`;

export const InputInfo = styled.Text<{ type: keyof Colors }>`
	font-family: 'Quicksand-SemiBold';
	font-size: ${({ theme }) => theme.fontSizes.xsmall}px;
	color: ${({ theme, type }) => theme.colors[type]};
`;
