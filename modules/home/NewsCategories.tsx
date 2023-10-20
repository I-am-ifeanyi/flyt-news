import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';

import { categoryState } from '../../pages/homeScreens/state/categoryState';

export function NewsCategories() {
  const { updateCategory, toggleTopHeadline } = categoryState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [categories, setCategories] = useState([
    { category: 'Top Headlines' },
    { category: 'Local News' },
    { category: 'Politics' },
    { category: 'Business and Finance' },
    { category: 'Technology' },
    { category: 'Science and Health' },
    { category: 'Entertainment and Arts' },
    { category: 'Sports' },
    { category: 'Lifestyle' },
    { category: 'Opinion and Editorial' },
    { category: 'Environment' },
    { category: 'Education', isActive: false },
    { category: 'Weather' },
    { category: 'Technology Trends' },
    { category: 'Human Interest' },
    { category: 'Travel' },
    { category: 'Crime and Justice' },
    { category: 'Breaking News Alerts' },
    { category: 'COVID-19 Updates' },
    {
      category: 'Special Features and Investigative Reporting',
    },
    { category: 'Tech Reviews and Product Launches' },
  ]);

  useEffect(() => {
    toggleTopHeadline(true);
  }, []);

  const toggleCategory = (id: number, category: string) => {
    if (id !== 0) {
      toggleTopHeadline(false);
    } else toggleTopHeadline(true);
    setActiveIndex(id);
    updateCategory(category);

  
  };
  return (
    <View>
      <ScrollView
        style={scrollContainer}
        horizontal={true}
        showsVerticalScrollIndicator={false}>
        {categories.map((item, index) => {
          const style =
            activeIndex === index ? categoryStyleActive : categoryStyle;
          const categoryViewStyle =
            activeIndex === index ? categoryContainer : null;

          return (
            <View key={index} style={{ marginRight: 20 }}>
              <Pressable
                style={categoryViewStyle}
                onPress={() => toggleCategory(index, item.category)}>
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
    marginVertical: 5,
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
