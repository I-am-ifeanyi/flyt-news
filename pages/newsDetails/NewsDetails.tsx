import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Box } from '../../ui/layout';

const image = require('../../assets/images/newsPoster.jpg');

export function NewsDetails({ navigation }) {
  return (
    <Box>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={28} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 30,
          }}>
          <Fontisto name="favorite" size={24} color={'black'} />
          <Entypo name="download" size={24} color="black" />
        </View>
      </View>
      <Image source={image} />
      <Text>NewsDetails</Text>
    </Box>
  );
}
