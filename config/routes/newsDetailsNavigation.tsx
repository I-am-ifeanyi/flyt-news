import { createStackNavigator } from '@react-navigation/stack';

import { NewsDetails } from '../../pages/newsDetails';
export default function NewsDetailsNavigation() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={'NewsDetails'}
      screenOptions={{ headerShown: false }}>
      <Screen name={'NewsDetails'} component={NewsDetails} />
    </Navigator>
  );
}
