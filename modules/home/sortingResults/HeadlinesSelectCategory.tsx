import { View, Text, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useState } from 'react';

import { categoryState } from '../../../pages/homeScreens/state/categoryState';

export function HeadlinesSelectCategory() {
  const { updateHeadlinesCategory } = categoryState();
  const [selectedValue, setSelectedValue] = useState('general');


  const sortOptions = [
    { label: 'General', value: 'general' },
    { label: 'Business', value: 'business' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Health', value: 'health' },
    { label: 'Science', value: 'science' },
    { label: 'Sports', value: 'sports' },
    { label: 'Technology', value: 'technology' },
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 10,
      }}>
      <Text style={{ fontWeight: '600' }}>Category:</Text>

      <View style={container}>
        <RNPickerSelect
          onValueChange={value => {
            setSelectedValue(value), updateHeadlinesCategory(value);
          }}
          items={sortOptions}
          value={selectedValue}
          doneText="Select"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'gray',
    width: Platform.OS === 'ios' ? '35%' : '55%',
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 0,
    borderRadius: 10,
  },
});

const { container } = styles;
