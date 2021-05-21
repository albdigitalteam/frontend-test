import styled from 'styled-components/native';
import { handlePixels } from '@/helpers/functions/utils';

export const StyledContainer = styled.View`
  flex: ${({ flex }) => flex || 1};
  width: ${({ width }) => handlePixels(width) || 'auto'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom || 0)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft || 0)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight || 0)};
  margin-top: ${({ marginTop }) => handlePixels(marginTop || 0)};
  padding-top: ${({ paddingTop }) => handlePixels(paddingTop || 0)};
  padding-right: ${({ paddingRight }) => handlePixels(paddingRight || 16)};
  padding-left: ${({ paddingLeft }) => handlePixels(paddingLeft || 16)};
  padding-bottom: ${({ paddingBottom }) => handlePixels(paddingBottom || 0)};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;

export const StyledSelectContainer = styled(StyledContainer)`
  height: 40px;
  border-radius: 8px;
  justify-content: center;
`;

export const StyledRow = styled(StyledContainer)`
  min-height: 40px;
  flex-direction: row;
  align-items: center;
  padding-right: ${({ paddingRight }) => handlePixels(paddingRight || 0)};
  padding-left: ${({ paddingLeft }) => handlePixels(paddingLeft || 0)};
`;

export const StyledLoading = styled.ActivityIndicator.attrs(
  ({ theme: { colors } }) => ({
    color: colors.PRIMARY
  })
)``;

export const StyledCard = styled(StyledContainer)`
  padding: 16px;
  border-radius: 8px;
  elevation: 8;
  box-shadow: ${({ theme: { colors } }) =>
    `0px 1px 25px ${colors.CARD_BACKGROUND_SHADOW}`};
  background-color: ${({ theme: { colors } }) => colors.SURFACE};
`;
