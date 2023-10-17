import { createStackNavigator } from '@react-navigation/stack';

import { Profile } from '../../pages/profile';
export default function ProfileNavigation() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={'Profile'}
      screenOptions={{ headerShown: false }}>
      <Screen name={'Profile'} component={Profile} />
    </Navigator>
  );
}
