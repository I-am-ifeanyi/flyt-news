import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageProps,
  ImageSourcePropType,
  ImageURISource,
} from 'react-native';
import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const newsImage = require('../../assets/images/newsPoster.jpg');

export type newsProps = {
  urlToImage?: ImageURISource;
  title?: string;
  author?: string;
  description?: string;
  publishedAt?: Date;
};
export function NewsComponent({
  urlToImage,
  title,
  author,
  description,
  publishedAt,
}: newsProps) {
  const [isNewsLiked, setIsNewsLiked] = useState(false);
  const [actionsCount, setActionsCount] = useState({
    likeCount: 20,
    commentCount: 14,
    shareCount: 10,
  });
  const { likeCount, commentCount, shareCount } = actionsCount;

  const toggleNewsLikeness = () => {
    setIsNewsLiked(prev => !prev);
    if (!isNewsLiked) {
      setActionsCount(prev => ({ ...prev, likeCount: prev.likeCount + 1 }));
    } else {
      setActionsCount(prev => ({ ...prev, likeCount: prev.likeCount - 1 }));
    }
  };
  // @ts-expect-error
  const publishedDate = new Date(publishedAt).toLocaleDateString();

  

  return (
    <View style={container}>
      <View style={imageContainer}>
        <Image
          //@ts-expect-error
          source={{ uri: urlToImage }}
          style={image}
          accessibilityLabel={description}
        />
      </View>
      <View style={contentContainer}>
        <Text style={headlineStyle}>{title}</Text>
        <Text style={{ fontSize: 10 }}>{publishedDate}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text>Author: {author ? author : 'Unavailable'}</Text>
          <Octicons name="dot-fill" size={24} color="red" />
        </View>
        <Text>
          {description} <Text>Read More</Text>
        </Text>
        <View style={actionsMainContainer}>
          <View style={actionsSubContainer}>
            <TouchableOpacity onPress={toggleNewsLikeness} style={IconsStyle}>
              {!isNewsLiked ? (
                <AntDesign name="hearto" size={24} color="gray" />
              ) : (
                <AntDesign name="heart" size={24} color="red" />
              )}
              <Text>{likeCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={IconsStyle}>
              <Fontisto name="comment" size={24} color="gray" />
              <Text>{commentCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={IconsStyle}>
              <FontAwesome5 name="share" size={24} color="gray" />
              <Text>{shareCount}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: '500' }}>130 Views</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E4DF',
    borderRadius: 10,
    marginVertical: 20
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentContainer: {
    gap: 10,
    padding: 10,
  },
  headlineStyle: {
    fontWeight: '800',
    fontSize: 16,
  },
  actionsMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  actionsSubContainer: {
    flexDirection: 'row',
    gap: 30,
    width: '50%',
  },
  IconsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: '25%',
  },
});
const {
  container,
  imageContainer,
  image,
  actionsMainContainer,
  actionsSubContainer,
  IconsStyle,
  contentContainer,
  headlineStyle,
} = styles;
