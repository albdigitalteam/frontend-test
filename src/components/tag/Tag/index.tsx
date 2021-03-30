import React, { FC } from 'react';

import { useTheme } from '#hooks/theme';

import { BoxPostTag, PostTag } from './styled';

const CategoryPost: Record<string, string> = {
	entertainment: 'ENTRETERIMENTO',
	games: 'JOGOS',
	culture: 'CULTURA',
	sports: 'ESPORTE',
};

type TagProp = {
	category: string;
	size?: 'small' | 'medium';
};

const Tag: FC<TagProp> = ({ category, size = 'small' }) => {
	const { colors } = useTheme();

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
		<BoxPostTag color={boxColor}>
			<PostTag color={textColor} size={size}>
				{CategoryPost[category]}
			</PostTag>
		</BoxPostTag>
	);
};

export default Tag;
