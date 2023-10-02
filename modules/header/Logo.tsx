import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Logo = () => {
  return (
    <View style={container}>
      <Image
        source={require('../../assets/images/flytNewsLogo.png')}
        style={{ width: 50, height: 50 }}
      />
      <View>
        <View style={nameContainer}>
          <Text style={flytStyle}>Flyt</Text>
          <Text style={newsStyle}>News</Text>
        </View>
        <Text style={subTextStyle}>Breaking news at your fingertips!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 50
    
  },
  nameContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  flytStyle: {
    color: 'red',
    fontWeight: '600',
    fontSize: 24,
  },
  newsStyle: {
    fontWeight: '600',
    fontSize: 24,
  },
  subTextStyle: {
    fontStyle: 'italic',
  },
});

const { container, nameContainer, flytStyle, newsStyle, subTextStyle } = styles;
