import { View, Text, StyleSheet } from 'react-native';

import { Logo } from '../../modules/header';

export const SignIn = () => {
  return (
    <View style={container}>
      <Logo />
      <Text>This is the sign in page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const { container } = styles;
