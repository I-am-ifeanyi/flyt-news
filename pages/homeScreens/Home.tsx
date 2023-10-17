import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';

import { Ionicons } from '@expo/vector-icons';

import { Header, NewsCategories, NewsComponent } from '../../modules/home';
import {
  SortResults,
  HeadlinesSelectCategory,
} from '../../modules/home/sortingResults';
import { Box } from '../../ui/layout';

import apiHomeData from './state/apiHomeData';
import { newsProps } from '../../modules/home/NewsComponent';
import { categoryState } from './state/categoryState';

export function Home({navigation} ) {
  const { isTopHeadlines, isCategory, toggleIsCategory, category } =
    categoryState();
  const {
    topHeadlinesData,
    everythingData,
    topHeadlinesIsLoading,
    isEverythingLoading,
    everythingError,
    topHeadlineError,
    everythingRefetch,
    topHeadlinesRefetch,
    everythingDataRefetching,
    topHeadlineRefetching,
  } = apiHomeData();
  const listRef = useRef<FlatList>(null);

  const dataToDisplay = isTopHeadlines ? topHeadlinesData : everythingData;

  useEffect(() => {
    listRef?.current?.scrollToIndex({
      index: 0,
    });
  }, [isCategory]);

  useEffect(() => {
    toggleIsCategory(true);
  }, []);

  const onPageRefresh = () => {
    if (isTopHeadlines) {
      topHeadlinesRefetch();
    }
    return everythingRefetch();
  };

  // const navigation = useNavigation();

  // const navigateToNewsDetails = () => {
  //   navigation.navigate('NewsDetailsNavigation', {
  //     Screen: 'NewsDetails',
  //   });
  // };

  return (
    <Box>
      <View style={container}>
        <Header />
        {isCategory ? (
          <NewsCategories />
        ) : (
          <View style={searchResultWrapper}>
            <TouchableOpacity onPress={() => toggleIsCategory(true)}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={searchResult}>Every news for {category}</Text>
          </View>
        )}

        {topHeadlineError || everythingError ? (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Sorry there was an error.
              </Text>
              <TouchableOpacity onPress={() => everythingRefetch()}>
                <Text
                  style={{ fontSize: 22, color: 'blue', fontWeight: '600' }}>
                  Try again
                </Text>
              </TouchableOpacity>
            </View>

            <Text>{everythingError.message}</Text>
          </View>
        ) : null}
        {isTopHeadlines ? <HeadlinesSelectCategory /> : <SortResults />}
        {topHeadlinesIsLoading || isEverythingLoading ? (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={'large'} color={'red'} />
          </View>
        ) : (
          <FlatList
            data={dataToDisplay?.articles}
            style={flatListStyle}
            ref={listRef}
            // refreshControl={
            //   <RefreshControl
            //     title="Refreshing..."
            //     titleColor={'red'}
            //     tintColor={'red'}
            //     style={{}}
            //     colors={['red']}
            //     onRefresh={onPageRefresh}
            //     refreshing={topHeadlineRefetching || everythingDataRefetching}
            //   />
            // }
            // @ts-expect-error
            renderItem={({
              item,
              index,
            }: {
              item: newsProps;
              index: number;
            }) => {
              const { author, publishedAt, description, urlToImage, title } =
                item;
              if (!urlToImage) return;
              return (
                <Pressable onPress={() => {
                    navigation.navigate('NewsDetailsNavigation', {
                      Screen: 'NewsDetails',
                    });
                }}>
                  <NewsComponent
                    urlToImage={urlToImage}
                    title={title}
                    author={author}
                    description={description}
                    publishedAt={publishedAt}
                  />
                </Pressable>
              );
            }}
          />
        )}
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  flatListStyle: {
    flexDirection: 'column',
  },
  searchResultWrapper: {
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
  searchResult: { fontWeight: '600', fontSize: 16, fontStyle: 'italic' },
});

const { container, flatListStyle, searchResultWrapper, searchResult } = styles;
