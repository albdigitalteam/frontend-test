import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isReadyRef } from '@navigation/RootNavigation';
import store from '@stores/reducers';
import theme from '@theme/theme';
import RootStack from '@navigation/navigation';
import ErrorBoundary from '@helpers/ErrorBoundary';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { Alert } from 'react-native';

setJSExceptionHandler(error => {
  Alert.alert(error.name, error.message, [{ text: 'OK' }]);
}, true);

export default function App(): JSX.Element {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Provider store={store}>
            <NavigationContainer
              ref={navigationRef}
              onReady={() => {
                isReadyRef.current = true;
              }}>
              <RootStack />
            </NavigationContainer>
          </Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
