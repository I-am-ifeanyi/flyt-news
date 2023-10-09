import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { useCountryStore } from '../countryDetails/state/setCountryState';

import { Header, NewsCategories } from '../../modules/home';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={container}>
        <Header />
        <NewsCategories />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});

const { container } = styles;
