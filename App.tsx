import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './config/routes/navigation';
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
      <StatusBar style="auto" />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
