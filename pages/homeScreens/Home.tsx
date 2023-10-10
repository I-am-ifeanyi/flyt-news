import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { Header, NewsCategories, NewsComponent } from '../../modules/home';

import apiHomeData from './state/apiHomeData';

export function Home() {
  // const { category } = apiHomeData()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={container}>
        <Header />
        <NewsCategories />
        <NewsComponent />
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
