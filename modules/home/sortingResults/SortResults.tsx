import { View, Text, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useState } from 'react';

import { categoryState } from '../../../pages/homeScreens/state/categoryState';

export function SortResults() {
  const { updateNewsSorting } = categoryState();
  const [selectedValue, setSelectedValue] = useState('Relevancy');

  const sortOptions = [
    { label: 'Relevancy', value: 'relevancy' },
    { label: 'Popularity', value: 'popularity' },
    { label: 'Most Recent', value: 'publishedAt' },
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 10,
      }}>
      <Text style={{ fontWeight: '600' }}>Sort by:</Text>

      <View style={container}>
        <RNPickerSelect
          onValueChange={value => {
            setSelectedValue(value), updateNewsSorting(value);
          }}
          items={sortOptions}
          value={selectedValue}
          doneText="Sort"
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
  }
});

const { container } = styles;
