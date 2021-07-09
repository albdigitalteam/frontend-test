import React from 'react';
import { StyledView, Text, Button } from '@components/components';
import ErrorBoundary from 'react-native-error-boundary';

const myErrorHandler = (error: Error) => {};

const CustomFallback = (props: { error: Error; resetError: () => void }) => (
  <StyledView flex={1} justifyContent="center" alignItems="center">
    <Text>Algo errado aconteceu!</Text>
    <Text>{props.error.toString()}</Text>
    <Button
      mt="m"
      onPress={props.resetError}
      label={'Tentar novamente'}
      bg="greenPrimary"
      color="white"
      padding="m"
    />
  </StyledView>
);

export default function Boundary({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <ErrorBoundary FallbackComponent={CustomFallback} onError={myErrorHandler}>
      {children}
    </ErrorBoundary>
  );
}
