import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {NoAuthRootStackParamList, RootParamList} from '..';
import CreateTaskScreen from '../screens/CreateTask';
import HomeScreen from '../screens/home';
import IntroScreen from '../screens/IntroScreen';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import DrawerContent from './DrawerContent';

const Stack = createNativeStackNavigator<NoAuthRootStackParamList>();

const Drawer = createDrawerNavigator<RootParamList>();

const introOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
};

const MainNavigation = () => {
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

  const drawerContent = useCallback(
    (props: DrawerContentComponentProps) => <DrawerContent {...props} />,
    [],
  );

  if (loading) {
    return <LoadingScreen />;
  }
  if (user === null) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={drawerContent}>
        <Drawer.Screen
          name="Home"
          options={{
            title: 'Inicio',
          }}
          component={HomeScreen}
        />
        <Drawer.Screen
          name="CreateTask"
          options={{
            title: 'Crear tarea',
          }}
          component={CreateTaskScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
