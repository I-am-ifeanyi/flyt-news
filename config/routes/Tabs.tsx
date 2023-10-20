import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, { ReactNode } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Home } from '../../pages/homeScreens';
import { AddPost } from '../../pages/addPost';
import { SavedNews } from '../../pages/savedNews';
import { Profile } from '../../pages/profile';
import { MyNews } from '../../pages/myNews';

export default function Tabs() {
  const { Navigator, Screen } = createBottomTabNavigator();

  // type Props = {
  //   children: ReactNode;
  //   onPress: () => void;
  // };

  // const CustomTabStyles = ({ children, onPress }: Props) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={onPress}
  //       style={{
  //         top: -30,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         ...styles.shadow,
  //       }}>
  //       <View style={{ width: 80, height: 80 }}>{children}</View>
  //     </TouchableOpacity>
  //   );
  // };

  const iconDefaultSize = Platform.OS === 'ios' ? 28 : 24;
  const plusIconSize = Platform.OS === 'ios' ? 70 : 65;

  const tabObjects = [
    {
      tabName: 'Home',
      activeTabIcon: <Entypo name="home" size={iconDefaultSize} color="red" />,
      inActiveTabIcon: (
        <Entypo name="home" size={iconDefaultSize} color={'gray'} />
      ),
      tabComponent: Home,
    },
    {
      tabName: 'My News',
      activeTabIcon: (
        <MaterialCommunityIcons
          name="content-save-all-outline"
          size={iconDefaultSize}
          color={'red'}
        />
      ),
      inActiveTabIcon: (
        <MaterialCommunityIcons
          name="content-save-all-outline"
          size={iconDefaultSize}
          color={'gray'}
        />
      ),

      tabComponent: MyNews,
    },
    {
      tabName: 'Add Post',
      activeTabIcon: (
        <Ionicons name="ios-add-circle" size={plusIconSize} color="red" />
      ),
      inActiveTabIcon: (
        <Ionicons name="ios-add-circle" size={plusIconSize} color={'#566573'} />
      ),

      tabComponent: AddPost,
    },
    {
      tabName: 'Saved',
      activeTabIcon: (
        <Fontisto name="favorite" size={iconDefaultSize} color={'red'} />
      ),
      inActiveTabIcon: (
        <Fontisto name="favorite" size={iconDefaultSize} color={'gray'} />
      ),

      tabComponent: SavedNews,
    },
    {
      tabName: 'Profile',
      activeTabIcon: (
        <MaterialIcons
          name="account-circle"
          size={iconDefaultSize}
          color={'red'}
        />
      ),
      inActiveTabIcon: (
        <MaterialIcons
          name="account-circle"
          size={iconDefaultSize}
          color={'gray'}
        />
      ),
      tabComponent: Profile,
    },
  ];

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F5F3EA',
          height: Platform.OS === 'ios' ? 100 : 70,
          position: 'absolute',
          left: 10,
          bottom: Platform.OS === 'ios' ? 10 : 0,
          right: 10,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          borderTopWidth: Platform.OS === 'ios' ? 4 : 0,
          ...styles.shadow,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red',
      }}>
      {tabObjects.map((item, index) => {
        const isAddPost = item.tabName === 'Add Post';
        return (
          <Screen
            key={index}
            name={item.tabName}
            component={item.tabComponent}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: isAddPost ? 65 : 50,
                    gap: 4,
                    position: isAddPost ? 'absolute' : 'relative',
                    top: isAddPost ? -36 : 0,
                  }}>
                  <View>
                    {focused ? item.activeTabIcon : item.inActiveTabIcon}
                  </View>
                  <Text
                    style={{
                      color: focused ? 'red' : 'gray',
                      fontWeight: focused ? '600' : '400',
                      fontSize: 12,
                      position: 'absolute',
                      top: isAddPost ? 87 : 40,
                    }}>
                    {item.tabName}
                  </Text>
                </View>
              ),
            }}
          />
        );
      })}
    </Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'red',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
});
