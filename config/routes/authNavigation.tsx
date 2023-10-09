import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, SignUp } from '../../pages/auth';
import { CountriesScreen } from '../../pages/countryDetails';

export default function AuthNavigation() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={'signIn'}
      screenOptions={{ headerShown: false }}>
      <Screen name={'SignIn'} component={SignIn} />
      <Screen name={'SignUp'} component={SignUp} />
      <Screen name={'CountriesScreen'} component={CountriesScreen} />
    </Navigator>
  );
}
