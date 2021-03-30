import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Send, ChevronLeft, MessageSquare, Trash2 } from 'react-native-feather';

import { SwipeablePanel } from 'rn-swipeable-panel';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { clearComments, fetchingPostComments } from '#actions/post/actions';
import { Input, PlaceholderImage, Tag } from '#components/index';
import { useTheme } from '#hooks/theme';
import { PostWithUser } from '#interfaces/Post';
import { AppState } from '#interfaces/App';

import {
	BackButton,
	Container,
	Content,
	PostTitle,
	PostText,
	BoxHorizontal,
	BoxVertical,
	PostAuthorContent,
	PostAuthorName,
	PostAuthorDate,
	PostCommentContent,
	PostCommentName,
	PostCommentsContent,
	PostCommentsContentTitle,
	PostCommentsBox,
	PostCommentAuthor,
	PostCommentText,
	FormComment
} from './styled';
import { FormHandles, SubmitHandler } from '@unform/core';
import {ButtonFill} from '#components/button';

type ParamList = {
	PostDetail: {
	  item: PostWithUser & { category: string };
	};
  };

const PostDetail = () => {
	const insets = useSafeAreaInsets();
	const { goBack } = useNavigation();
	const route = useRoute<RouteProp<ParamList, 'PostDetail'>>();
	const dispatch = useDispatch();
	const { commentsDetail } = useSelector((state: AppState) => state.post)
	const formRef = useRef<FormHandles>(null);
	const [showComments, setShowComments] = useState(false);
	const { colors, fontSizes, windowSizes, normalizeHeight, normalizeWidth } = useTheme();
	const post = route.params.item;

	const handleSubmit: SubmitHandler<FormData> = (data) => {
		console.log(formRef);
		console.log(data);
	}

	useEffect(() => {
		dispatch(fetchingPostComments(post.id));
		return () => {
			dispatch(clearComments());
		}
	}, [])

	return (
		<Container>
			<StatusBar animated barStyle='dark-content' translucent backgroundColor="transparent" />
			<PlaceholderImage
				sizeWidth={`${windowSizes.totalWidth}px`}
				sizeHeight={`${normalizeHeight(180)}px`}
				placeholderUri='https://picsum.photos/170/100.jpg?blur=8'
				source={{
					uri: 'https://picsum.photos/1080/608.jpg',
					width: windowSizes.totalWidth,
					height: normalizeHeight(180)
				}}
			/>
			<BackButton insets={insets} onPress={() => goBack()}>
				<ChevronLeft
					stroke='#000'
					width={fontSizes.xxlarge}
					height={fontSizes.xxlarge}
				/>
			</BackButton>
			<Content>
				<Tag category={post.category} size='medium' />
				<PostTitle>{post.title}</PostTitle>
				<BoxHorizontal>
					<BoxVertical>
						<PostAuthorContent>
							<PostAuthorName>
								{post.user.name}
							</PostAuthorName>
							<PostAuthorDate>
								{format(new Date(), 'dd MMMM', { locale: ptBR })}
							</PostAuthorDate>
						</PostAuthorContent>

					</BoxVertical>
					<BoxHorizontal>
						<PostCommentContent onPress={() => setShowComments(true)}>
							<PostCommentName>
								{commentsDetail.length}
							</PostCommentName>
							<MessageSquare stroke={colors.textDark}/>
						</PostCommentContent>
						<PostCommentContent>
							<Trash2 stroke={colors.textDark}/>
						</PostCommentContent>
					</BoxHorizontal>
				</BoxHorizontal>
				<PostText>
					{post.body}
				</PostText>
			</Content>
			<SwipeablePanel
				isActive={showComments}
				fullWidth
				showCloseButton
				onClose={() => setShowComments(false)}
				style={{
					paddingHorizontal: 20
				}}
			>
				<PostCommentsContent>
					<PostCommentsContentTitle>Comentários ({commentsDetail.length})</PostCommentsContentTitle>
					{commentsDetail.map((comment) => (
						<PostCommentsBox key={comment.id}>
							<PostCommentAuthor>
								{comment.name}
							</PostCommentAuthor>
							<PostCommentText>
								{comment.body}
							</PostCommentText>

						</PostCommentsBox>
					))}
					<FormComment ref={formRef} onSubmit={handleSubmit}>
						<Input
							name="comment"
							placeholder='Comente aqui...'
							rightIcon={<Send stroke={colors.text} />}
							rightAction={() => formRef.current?.submitForm()}
							inputWidth={normalizeWidth(280)}
							multiline={true}
    						numberOfLines={4}
							maxLength={200}
							border
						/>
					</FormComment>
				</PostCommentsContent>
			</SwipeablePanel>
		</Container>
	);
};

export default PostDetail;
