import { View, Text } from 'react-native';
import React, { useState } from 'react';

export function NewsCategories() {
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


 

  return (
    <View>
      <Text>NewsCategories</Text>
    </View>
  );
}
