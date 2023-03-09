import {View, Text, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {genres} from '../../constants';
import {MovieGenre} from '../../@types';
import CategoryButton from '../CategoryButton';

type CategoriesProps = {
  selectedCategory: keyof MovieGenre;
  setSelectedCategory: React.Dispatch<React.SetStateAction<keyof MovieGenre>>;
};

const Categories = ({selectedCategory, setSelectedCategory}: CategoriesProps) => {
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
