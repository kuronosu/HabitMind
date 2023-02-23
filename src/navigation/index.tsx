import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthRootStackParamList, NoAuthRootStackParamList} from '..';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import IntroScreen from '../screens/IntroScreen';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator<
  AuthRootStackParamList & NoAuthRootStackParamList
>();

const introOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
};

const MainStack = () => {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);
  // const setUserData = useUserStore(state => state.setUser);

  const onAuthStateChanged = React.useCallback(
    (authUser: FirebaseAuthTypes.User | null) => {
      setUser(authUser);
      if (authUser === null) {
        // set user null
        setLoading(false);
        return;
      }
      setLoading(false);
      // fetch user data from firestore
    },
    [],
  );

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user === null ? (
          <>
            <Stack.Screen
              name="Intro"
              component={IntroScreen}
              options={{
                ...introOptions,
                animationTypeForReplace: 'pop',
              }}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerLeft: () => null,
                headerBackButtonMenuEnabled: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
