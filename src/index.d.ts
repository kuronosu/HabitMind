import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type NoAuthRootStackParamList = {
  // todo - add more screens here
  Intro: undefined;
  Login: undefined;
};

export type RootParamList = {
  Home: undefined;
  CreateTask: undefined;
  GroupedTasks: {group: string};
};

export type RootNavigationProp = NavigationProp<RootParamList>;

// export type AuthRootStackParamList = {
//   // todo - add more screens here
//   Home: undefined;
// };

// export type AuthScreenNavigationProp<K extends keyof AuthRootStackParamList> =
//   NativeStackNavigationProp<AuthRootStackParamList, K>;

// export type AuthScreenProps<K extends keyof AuthRootStackParamList> =
//   NativeStackScreenProps<AuthRootStackParamList, K>;

export type NoAuthScreenNavigationProp<
  K extends keyof NoAuthRootStackParamList,
> = NativeStackNavigationProp<NoAuthRootStackParamList, K>;

export type NoAuthScreenProps<K extends keyof NoAuthRootStackParamList> =
  NativeStackScreenProps<NoAuthRootStackParamList, K>;

export type Task = {
  id?: string;
  title: string;
  description: string;
  date: Date;
  completed: boolean;
  group: string;
  user: string;
};
