import auth from '@react-native-firebase/auth';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {logoutGoogle} from '../firebase/auth/google';
import {StyledDrawerSection, StyledTitle, StyledView} from '../styled';

type DrawerItemIcon = (props: {
  focused: boolean;
  size: number;
  color: string;
}) => React.ReactNode;

const HomeIcon: DrawerItemIcon = ({color, size}) => (
  <Icon name="home" color={color} size={size} />
);

const UniversityIcon: DrawerItemIcon = ({color, size}) => (
  <Icon name="school" color={color} size={size} />
);

const WorkIcon: DrawerItemIcon = ({color, size}) => (
  <Icon name="briefcase" color={color} size={size} />
);

const SignOutIcon: DrawerItemIcon = ({color, size}) => (
  <Icon name="logout" color={color} size={size} />
);

export default function DrawerContent(props: DrawerContentComponentProps) {
  const {displayName, email, photoURL} = auth().currentUser!;

  return (
    <StyledView className="flex-1 w-full">
      <DrawerContentScrollView {...props}>
        <StyledView className="w-full pl-2">
          <StyledView className="mt-4 w-full">
            <StyledView className="flex flex-row items-center">
              <Avatar.Image
                size={60}
                source={{
                  uri: photoURL || 'https://picsum.photos/200',
                }}
              />
              <StyledTitle className="flex-1 mx-2 font-light leading-5">
                {displayName || email}
              </StyledTitle>
            </StyledView>
          </StyledView>

          <StyledDrawerSection className="mt-5">
            <DrawerItem
              icon={HomeIcon}
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={UniversityIcon}
              label="Universidad"
              onPress={() => props.navigation.navigate('Profile')}
            />
            <DrawerItem
              icon={WorkIcon}
              label="Trabajo"
              onPress={() => props.navigation.navigate('Profile')}
            />
          </StyledDrawerSection>
        </StyledView>
      </DrawerContentScrollView>
      <StyledDrawerSection className="mb-5 border-t border-gray-200">
        <DrawerItem
          icon={SignOutIcon}
          label="Cerrar sesión"
          onPress={logoutGoogle}
        />
      </StyledDrawerSection>
    </StyledView>
  );
}
