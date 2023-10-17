import { View, Text } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
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

  const customTabStyles = {};

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F5F3EA',
          height: 100,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        tabBarItemStyle: {
          borderTopColor: '#A3A2A5',
          borderTopWidth: 4,
          paddingTop: 5,
        },
        tabBarActiveTintColor: 'red',
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Entypo name="home" size={24} color="red" />;
            }
            return <AntDesign name="home" size={24} color={'black'} />;
          },
        }}
      />
      <Screen
        name="My News"
        component={MyNews}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="content-save-all-outline"
              size={24}
              color={focused ? 'red' : 'black'}
            />
          ),
        }}
      />

      <Screen
        name="Add Post"
        component={AddPost}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add-circle-outline"
              size={24}
              color={focused ? 'red' : 'black'}
            />
          ),
        }}
      />
      <Screen
        name="Saved"
        component={SavedNews}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="favorite"
              size={24}
              color={focused ? 'red' : 'black'}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="account-circle"
              size={24}
              color={focused ? 'red' : 'black'}
            />
          ),
        }}
      />
    </Navigator>
  );
}
