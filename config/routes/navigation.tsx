import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigation from './authNavigation';
import HomeNavigation from './homeNavigation';

export default function RootNavigation() {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="authNavigation"
      screenOptions={{ headerShown: false }}>
      <Screen name="authNavigation" component={AuthNavigation} />
      <Screen name="homeNavigation" component={HomeNavigation} />
    </Navigator>
  );
}
