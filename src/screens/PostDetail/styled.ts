import { EdgeInsets } from 'react-native-safe-area-context';

import styled from 'styled-components/native';
import { Form } from '@unform/mobile';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
	padding-bottom: 0px;
	padding-left: 5px;
	padding-right: 5px;
	justify-content: space-between;
	align-items: center;
	align-content: center;
`;

export const BackButton = styled.TouchableOpacity<{ insets: EdgeInsets }>`
	position: absolute;
	top: ${({ insets }) => insets.top + 20}px;
	left: 20px;
	padding: 5px;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 10px;
`;

export const PostImage = styled.Image``;

export const Row = styled.View`
	width: ${({ theme }) => theme.windowSizes.totalWidth - 40}px;
`;

export const BoxHorizontal = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	padding-top: 10px;
	padding-bottom: 25px;
`;
export const BoxVertical = styled.View`
	flex-direction: column;
`;

export const CenterAll = styled.View`
	justify-content: center;
	align-items: center;
	align-content: center;
`;

export const PostTitle = styled.Text`
	font-family: 'Quicksand-Bold';
	font-size: ${({ theme }) => theme.fontSizes.medium}px;
	color: ${({ theme }) => theme.colors.blackText};
	margin: 10px 0;
`;

export const PostText = styled.Text`
	font-family: 'Quicksand-Regular';
	font-size: ${({ theme }) => theme.fontSizes.small}px;
	color: ${({ theme }) => theme.colors.textDark};
	margin-bottom: 15px;
`;

export const Content = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingBottom: 50,
	},
})`
	flex: 1;
	margin-top: -30px;
	width: ${({ theme }) => theme.windowSizes.totalWidth}px;
	background-color: ${({ theme }) => theme.colors.constrastBackground};
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	padding: 20px;
`;

export const PostAuthorContent = styled.View``;

export const PostAuthorName = styled.Text`
	font-family: 'Quicksand-Bold';
	font-size: ${({ theme }) => theme.fontSizes.xsmall}px;
	color: ${({ theme }) => theme.colors.textDark};
`;

export const PostAuthorDate = styled.Text`
	font-family: 'Quicksand-Regular';
	font-size: ${({ theme }) => theme.fontSizes.xsmall}px;
	color: ${({ theme }) => theme.colors.textDark};
`;

export const PostCommentContent = styled.TouchableOpacity`
	flex-direction: row;
	margin: 0px 5px;
`;

export const PostCommentName = styled.Text`
	font-family: 'Quicksand-Regular';
	font-size: ${({ theme }) => theme.fontSizes.xsmall}px;
	color: ${({ theme }) => theme.colors.textDark};
	margin-right: 5px;
`;

export const PostCommentsContent = styled.View`
	margin-bottom: 35px;
`;

export const PostCommentsBox = styled.View`
	flex-direction: column;
	margin-bottom: 10px;
	border-bottom-width: 0.3px;
	border-bottom-color: ${({ theme }) => theme.colors.silver};
`;

export const PostCommentAuthor = styled.Text`
	font-family: 'Quicksand-Bold';
	font-size: ${({ theme }) => theme.fontSizes.small}px;
	color: ${({ theme }) => theme.colors.textDark};
	padding-bottom: 5px;
`;

export const PostCommentText = styled.Text`
	font-family: 'Quicksand-Regular';
	font-size: ${({ theme }) => theme.fontSizes.small}px;
	color: ${({ theme }) => theme.colors.textDark};
	padding-bottom: 10px;
`;

export const PostCommentsContentTitle = styled.Text`
	font-family: 'Quicksand-Bold';
	font-size: ${({ theme }) => theme.fontSizes.medium}px;
	color: ${({ theme }) => theme.colors.textDark};
	padding-bottom: 10px;
	margin-top: 20px;
`;

export const FormComment = styled(Form)`
	flex: 1;
	justify-content: center;
	align-items: center;
	align-content: center;
`;
