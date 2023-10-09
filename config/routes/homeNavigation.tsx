import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../pages/homeScreens';
import { CountriesScreen } from '../../pages/countryDetails';
export default function HomeNavigation() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}>
      <Screen name={'Home'} component={Home} />
    </Navigator>
  );
}
