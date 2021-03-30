import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useTheme } from '#hooks/theme';

import PlaceholderImage from '../../image/PlaceholderImage';
import {
	Content,
	BoxHorizontal,
	BoxVertical,
	BoxPostTag,
	PostTag,
	PostTitle,
	PostSummary,
	PostAuthor,
	PostDate,
	PostImage,
} from './styled';

type PostItemProps = {
	title: string;
	summary: string;
	created: Date;
	author: string;
	picture: string;
	category: string;
	goToDetail: (event: GestureResponderEvent) => void;
};

const CategoryPost: Record<string, string> = {
	entertainment: 'ENTRETERIMENTO',
	games: 'JOGOS',
	culture: 'CULTURA',
	sports: 'ESPORTE',
};

const PostItem: FC<PostItemProps> = ({
	title,
	summary,
	created,
	author,
	picture,
	placeholderPicture,
	category,
	goToDetail,
}) => {
	const { colors, normalizeWidth, normalizeHeight } = useTheme();

	const getColorByCategory = () => {
		const CategoryPostColor: Record<string, { text: string; background: string }> = {
			entertainment: {
				text: colors.success,
				background: colors.successLight,
			},
			games: {
				text: colors.info,
				background: colors.infoLight,
			},
			culture: {
				text: colors.warning,
				background: colors.warningLight,
			},
			sports: {
				text: colors.warning,
				background: colors.warningLight,
			},
		};
		return CategoryPostColor[category];
	};

	const { text: textColor, background: boxColor } = getColorByCategory();

	return (
		<Content onPress={goToDetail}>
			<BoxHorizontal>
				<BoxVertical>
					<BoxPostTag color={boxColor}>
						<PostTag color={textColor}>{CategoryPost[category]}</PostTag>
					</BoxPostTag>
					<PostTitle>{title}</PostTitle>
					<PostSummary>{summary}</PostSummary>
					<BoxHorizontal>
						<PostAuthor>{author}</PostAuthor>
						<PostDate>{format(created, 'dd.MM', { locale: ptBR })}</PostDate>
					</BoxHorizontal>
				</BoxVertical>
				{/* <PostImage source={{ uri: picture, width: normalizeWidth(80) }} /> */}
				<PlaceholderImage
					style={{ borderRadius: 10, marginHorizontal: 20 }}
					sizeWidth={`${normalizeWidth(80)}px`}
					sizeHeight={`${normalizeHeight(80)}px`}
					source={{
						uri: picture,
						width: normalizeWidth(80),
						height: normalizeHeight(80),
					}}
				/>
			</BoxHorizontal>
		</Content>
	);
};

export default PostItem;
