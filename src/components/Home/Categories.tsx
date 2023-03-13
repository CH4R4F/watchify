import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {genres} from '../../constants';
import {MovieGenre} from '../../@types';
import CategoryButton from '../CategoryButton';
import DataContext from '../../contexts/DataProvider';

const Categories = () => {
  const {selectedCategory, setSelectedCategory} = useContext(DataContext);

  const renderItem = useCallback(
    ({item}: {item: keyof MovieGenre}) => (
      <CategoryButton
        active={selectedCategory === item}
        title={item}
        onPress={() => {
          setSelectedCategory(item);
        }}
      />
    ),
    [setSelectedCategory, selectedCategory],
  );
  const ListHeaderComponent = useCallback(() => <View className="w-3" />, []);

  return (
    <View>
      <Text className="text-2xl text-primary_text font-heading-500 px-4 mb-4">Categories</Text>
      <FlatList
        data={Object.keys(genres) as (keyof MovieGenre)[]}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
