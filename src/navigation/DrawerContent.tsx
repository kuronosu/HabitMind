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
import {groups} from '../groups';
import {StyledDrawerSection, StyledTitle, StyledView} from '../styled';

type DrawerItemIcon = (props: {
  focused: boolean;
  size: number;
  color: string;
}) => React.ReactNode;

const HomeIcon: DrawerItemIcon = ({color, size}) => (
  <Icon name="home" color={color} size={size} />
);

const SignOutIcon: DrawerItemIcon = ({color, size}) => (
  <Icon name="logout" color={color} size={size} />
);
const _Icon: (name: string) => DrawerItemIcon =
  name =>
  ({color, size}) =>
    <Icon name={name} color={color} size={size} />;

export default function DrawerContent(props: DrawerContentComponentProps) {
  const {displayName, email, photoURL} = auth().currentUser!;
  const currentRoute = props.state.routeNames[props.state.index];
  // const [groupsArray] = React.useState(defaultGroupsArray);

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
              <StyledTitle className="flex-1 mx-2 font-light text-slate-600 leading-5">
                {displayName || email}
              </StyledTitle>
            </StyledView>
          </StyledView>

          <StyledDrawerSection className="mt-5">
            <DrawerItem
              icon={HomeIcon}
              label="Home"
              focused={currentRoute === 'Home'}
              onPress={() => props.navigation.navigate('Home')}
            />
            {Object.keys(groups).map(key => {
              const group = groups[key];
              return (
                <DrawerItem
                  key={key}
                  // focused={currentRoute === group.name}
                  icon={_Icon(group.icon)}
                  label={group.name}
                  onPress={() =>
                    props.navigation.navigate('GroupedTasks', {group: key})
                  }
                  {...props}
                />
              );
            })}
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
