import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import colors from '@/theme/colors';

import { handlePixels } from '@/helpers/functions/utils';

const Line = ({
  width,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  backgroundColor
}) => (
  <StyledLine
    width={width}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    backgroundColor={backgroundColor}
  />
);

Line.defaultProps = {
  width: '100%',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  backgroundColor: colors.LINE
};

Line.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

const StyledLine = styled.View`
  width: ${({ width }) => handlePixels(width)};
  height: 1px;
  margin-top: ${({ marginTop }) => handlePixels(marginTop)};
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight)};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default memo(Line);
