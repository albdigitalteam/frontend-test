import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native';

import { ButtonStyled, ButtonText } from './styled';

type ButtonFillProps = {
	text: string,
	textColor?: string,
	color?: string,
	textSize: number,
	onPress: (event: GestureResponderEvent) => void,
};

const ButtonFill: FC<ButtonFillProps> = ({ text, textSize, color, textColor, onPress }) => {
	return (
		<ButtonStyled color={color} onPress={onPress}>
			<ButtonText textColor={textColor} textSize={textSize}>
				{text}
			</ButtonText>
		</ButtonStyled>
	);
};

export default ButtonFill;
