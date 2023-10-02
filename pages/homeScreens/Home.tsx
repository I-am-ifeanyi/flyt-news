import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export  function Home() {
  return (
    <View style={container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
});

const { container } = styles;