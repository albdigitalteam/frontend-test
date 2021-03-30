import React, { FC, useState } from 'react';

import { Animated, ImageProps } from 'react-native';

import PlaceholderPostDetail from '../../../images/placeholderPostDetail.png';

import { ImageContainer, ImageAnimated, ImagePlaceholder } from './styled';
import { onlyNumbers } from '../../../utils/string';

interface PlaceholderImageProps extends ImageProps {
	sizeWidth?: string;
	sizeHeight?: string;
	placeholderUri?: string;
}

const PlaceholderImage: FC<PlaceholderImageProps> = (props) => {
	const [opacity] = useState(new Animated.Value(0));

	const onLoad = () => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 300,
			useNativeDriver: false,
		}).start();
	};

	const { sizeWidth = '100%', sizeHeight = '100%' } = props;
	return (
		<ImageContainer width={sizeWidth} height={sizeHeight} style={props.style}>
			<ImagePlaceholder
				{...props}
				source={
					props.placeholderUri
						? {
								uri: props.placeholderUri,
								height: onlyNumbers(sizeHeight),
								width: onlyNumbers(sizeWidth),
						  }
						: PlaceholderPostDetail
				}
				sizeWidth={sizeWidth}
				sizeHeight={sizeHeight}
			/>
			<ImageAnimated
				{...props}
				onLoad={onLoad}
				style={[
					props.style,
					{
						height: onlyNumbers(sizeHeight),
						width: onlyNumbers(sizeWidth),
						opacity: opacity,
					},
				]}
			/>
		</ImageContainer>
	);
};

export default PlaceholderImage;
