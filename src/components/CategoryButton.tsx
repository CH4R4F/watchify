import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {colors} from '../constants';

type Props = {
  title: string;
  onPress: () => void;
  active?: boolean;
};

const CategoryButton = ({title, onPress, active}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        className={'px-3 py-2 min-w-[100px] items-center mr-4 rounded-full'}
        style={{backgroundColor: active ? colors.primary : colors.primary_bg}}>
        <Text
          className="font-text-600"
          style={{
            color: active ? colors.primary_bg : colors.secondary_text,
          }}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryButton;
