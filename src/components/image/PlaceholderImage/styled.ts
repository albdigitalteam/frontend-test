import { Animated } from 'react-native';

import styled from 'styled-components/native';

export const ImageContainer = styled.View<{ width: string; height: string; }>`
    /* position: absolute; */
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

export const ImagePlaceholder = styled.Image<{ sizeWidth: string; sizeHeight: string; }>`
    position: absolute;
    width: ${({ sizeWidth }) => sizeWidth};
    height: ${({ sizeHeight }) => sizeHeight};
`;

export const ImageAnimated = styled(Animated.Image)`
    position: absolute;
`;