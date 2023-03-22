import auth from '@react-native-firebase/auth';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import {
  Avatar,
  // Drawer,
  // Paragraph,
  Switch,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {logoutGoogle} from '../firebase/auth/google';
import {
  StyledView,
  StyledTitle,
  StyledCaption,
  StyledDrawerSection,
} from '../styled';

type DrawerItemIcon = (props: {
  focused: boolean;
  size: number;
  color: string;
}) => React.ReactNode;

const HomeIcon: DrawerItemIcon = ({color, size}) => (
  <Icon name="home-outline" color={color} size={size} />
);

const ProfileIcon: DrawerItemIcon = ({color, size}) => (
  <Icon name="account-outline" color={color} size={size} />
);

export default function DrawerContent(props: DrawerContentComponentProps) {
  const paperTheme = useTheme();
  const {displayName, email, photoURL} = auth().currentUser!;

  return (
    <StyledView className="flex-1">
      <DrawerContentScrollView {...props}>
        <StyledView className="flex-1">
          <StyledView className="pl-6">
            <StyledView className="flex-row items-center mt-4">
              <Avatar.Image
                source={{
                  uri: photoURL || 'https://picsum.photos/200',
                }}
                size={50}
              />
              <StyledView className="flex-col mx-3">
                <StyledTitle className="text-xl font-bold mt-1 text-black">
                  {displayName}
                </StyledTitle>
                <StyledCaption className="text-sm font-light text-gray-500">
                  {email}
                </StyledCaption>
              </StyledView>
            </StyledView>

            {/* <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View> */}
          </StyledView>

          <StyledDrawerSection className="mt-5">
            <DrawerItem
              icon={HomeIcon}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={ProfileIcon}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
          </StyledDrawerSection>
          <StyledDrawerSection title="Preferences">
            <TouchableRipple
              onPress={() => {
                // toggleTheme();
              }}>
              <StyledView className="flex-row content-between py-3 px-5 text-black">
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </StyledView>
            </TouchableRipple>
          </StyledDrawerSection>
        </StyledView>
      </DrawerContentScrollView>
      <StyledDrawerSection className="mb-5 border-t border-gray-200">
        <DrawerItem
          // icon={SignOutIcon}
          label="Sign Out"
          onPress={() => {
            logoutGoogle();
          }}
        />
      </StyledDrawerSection>
    </StyledView>
  );
}
