import React, { memo } from 'react';
import styled from 'styled-components/native';

const Loading = () => <StyledLoading />;

const StyledLoading = styled.ActivityIndicator.attrs(
  ({ theme: { colors } }) => ({
    color: colors.PRIMARY
  })
)``;

export default memo(Loading);
