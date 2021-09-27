import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import { AuthContext } from '../Contexts/AuthContext';

import DrawerMenuNavigation from './DrawerMenuNavigation';
import PostNavigation from './PostNavigation';

import { Welcome } from '../pages/Welcome';
import { Users } from '../pages/Users';
import { Posts } from '../pages/Posts';
import { NewPost } from '../pages/NewPost';
import { LoadingData } from '../components/LoadingData';

const Stack = createNativeStackNavigator();

function Routes() {
  const keyUserStore = 'userSelected';
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function deleteStore(key, value?) {
    await SecureStore.deleteItemAsync(key);
  }
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_USER_OBJECT':
          return {
            ...prevState,
            userSelected: action.userObject,
            isLoading: false,
          };
        case 'SIGN_IN':
          save(keyUserStore, action.userObject);
          return {
            ...prevState,
            isSignout: false,
            userSelected: action.userObject,
          };
        case 'SIGN_OUT':
          deleteStore(keyUserStore);
          return {
            ...prevState,
            isSignout: true,
            userSelected: null,
          };
        default:
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userSelected: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userSelected;

      try {
        userSelected = await SecureStore.getItemAsync(keyUserStore);
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: 'RESTORE_USER_OBJECT', userObject: userSelected });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: 'SIGN_IN', userObject: JSON.stringify(data) });
      },
      signOut: () => {
        dispatch({ type: 'SIGN_OUT', userObject: null });
      },
    }), [],
  );

  if (state.isLoading) {
    <LoadingData />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFF' } }}
      >
        {state.userSelected == null ? (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Users" component={Users} />
          </>
        ) : (
          <Stack.Screen name="DrawerApp" component={DrawerMenuNavigation} />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

export default Routes;

// <>
//   <Stack.Screen name="Posts" component={Posts} />
//   <Stack.Screen name="PostDetail" component={PostNavigation} />
//   <Stack.Screen name="NewPost" component={NewPost}
// options={{ headerShown: true, title: 'New post' }} />
// </>
