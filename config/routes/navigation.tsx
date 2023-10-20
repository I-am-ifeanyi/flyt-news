import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigation from './authNavigation';
import HomeNavigation from './homeNavigation';
import AddPostNavigation from './addPostNavigation';
import ProfileNavigation from './profileNavigation';
import SavedNewsNavigation from './savedNewsNavigation';
import NewsDetailsNavigation from './newsDetailsNavigation';
import Tabs from './Tabs';

import { userStore } from '../../pages/countryDetails/state/setUserData';
export default function RootNavigation() {
  const {
    userInfo: { email, password },
  } = userStore();
  const { Navigator, Screen } = createStackNavigator();
  const initialRouteName = 'tabs'

  return (
    <Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}>
      <Screen name="authNavigation" component={AuthNavigation} />
      <Screen name="homeNavigation" component={HomeNavigation} />
      <Screen name="addPostNavigation" component={AddPostNavigation} />
      <Screen name="profileNavigation" component={ProfileNavigation} />
      <Screen name="savedNewsNavigation" component={SavedNewsNavigation} />
      <Screen name="NewsDetailsNavigation" component={NewsDetailsNavigation} />
      <Screen name="tabs" component={Tabs} />
    </Navigator>
  );
}
