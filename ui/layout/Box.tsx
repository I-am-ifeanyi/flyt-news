import { View, StyleSheet, Platform, SafeAreaView } from 'react-native';
import React, { ReactNode } from 'react';

export function Box({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={style.wrapper}>{children}</View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#fff',
  },
});
