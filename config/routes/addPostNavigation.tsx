import { createStackNavigator } from '@react-navigation/stack';

import { AddPost } from '../../pages/addPost';
export default function AddPostNavigation() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={'AddPost'}
      screenOptions={{ headerShown: false }}>
      <Screen name={'AddPost'} component={AddPost} />
    </Navigator>
  );
}
