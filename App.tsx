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

export default function App(): JSX.Element {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              isReadyRef.current = true;
            }}>
            <RootStack />
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
