import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

import { categoryState } from '../../pages/homeScreens/state/categoryState';

export function NewsCategories() {
  const { updateCategory, category } = categoryState();
  const [categories, setCategories] = useState([
    { category: 'All News', isActive: true },
    { category: 'Top Headlines', isActive: false },
    { category: 'Local News', isActive: false },
    { category: 'Politics', isActive: false },
    { category: 'Business and Finance', isActive: false },
    { category: 'Technology', isActive: false },
    { category: 'Science and Health', isActive: false },
    { category: 'Entertainment and Arts', isActive: false },
    { category: 'Sports', isActive: false },
    { category: 'Lifestyle', isActive: false },
    { category: 'Opinion and Editorial', isActive: false },
    { category: 'Environment', isActive: false },
    { category: 'Education', isActive: false },
    { category: 'Weather', isActive: false },
    { category: 'Technology Trends', isActive: false },
    { category: 'Human Interest', isActive: false },
    { category: 'Travel', isActive: false },
    { category: 'Crime and Justice', isActive: false },
    { category: 'Breaking News Alerts', isActive: false },
    { category: 'COVID-19 Updates', isActive: false },
    {
      category: 'Special Features and Investigative Reporting',
      isActive: false,
    },
    { category: 'Tech Reviews and Product Launches', isActive: false },
  ]);


  const toggleCategory = (id: number) => {
    setCategories(prev => {
      return prev.map((item, index) => {
        if (index === id) {
          updateCategory(item.category);
          return { ...item, isActive: true };
        } else {
          return { ...item, isActive: false };
        }
      });
    });
  };
  return (
    <View>
      <ScrollView
        style={scrollContainer}
        horizontal={true}
        showsVerticalScrollIndicator={false}>
        {categories.map((item, index) => {
          const style = item.isActive ? categoryStyleActive : categoryStyle;
          const categoryViewStyle = item.isActive ? categoryContainer : null;

          return (
            <View key={index} style={{ marginRight: 20 }}>
              <Pressable
                style={categoryViewStyle}
                onPress={() => toggleCategory(index)}>
                <Text style={style}>{item.category}</Text>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginVertical: 20,
  },
  categoryContainer: {
    borderBottomWidth: 2,
    alignContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
  },
  categoryStyle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    paddingVertical: 5,
  },
  categoryStyleActive: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 5,
  },
});

const {
  scrollContainer,
  categoryStyle,
  categoryStyleActive,
  categoryContainer,
} = styles;
