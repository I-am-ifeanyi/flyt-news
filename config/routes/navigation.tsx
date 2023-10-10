import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigation from './authNavigation';
import HomeNavigation from './homeNavigation';

import { userStore } from '../../pages/countryDetails/state/setUserData';
export default function RootNavigation() {
  const {
    userInfo: { email, password },
  } = userStore();
  const { Navigator, Screen } = createStackNavigator();
  const initialRouteName =
    email && password ? 'authNavigation' : 'authNavigation';

  return (
    <Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}>
      <Screen name="authNavigation" component={AuthNavigation} />
      <Screen name="homeNavigation" component={HomeNavigation} />
    </Navigator>
  );
}
