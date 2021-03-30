import React, { FC } from 'react';

import Loading from '#animations/simpleLoading.json';

import { Containter, LottieStyled } from './styled';

const SimpleLoading: FC = () => {
	return (
		<Containter>
			<LottieStyled source={Loading} autoPlay loop />
		</Containter>
	);
};

export default SimpleLoading;
