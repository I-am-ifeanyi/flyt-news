import { createStackNavigator } from '@react-navigation/stack';

import { SavedNews } from '../../pages/savedNews';
export default function SavedNewsNavigation() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={'SavedNews'}
      screenOptions={{ headerShown: false }}>
      <Screen name={'SavedNews'} component={SavedNews} />
    </Navigator>
  );
}
