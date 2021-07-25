import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Screens
import Home from "./screens/home";
import Splash from "./screens/splash";
import FeedDetails from "./screens/feedDetails";

const { Navigator, Screen } = createStackNavigator();
const Routes = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Splash"
        >
          <Screen name="Home" component={Home} />
          <Screen name="Splash" component={Splash} />
          <Screen name="FeedDetails" component={FeedDetails} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Routes;
