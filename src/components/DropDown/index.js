import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'src/components';

const DropDown = props => {
  const { containerStyle, data, onPressMenu, isActive, handleOpenMenu } = props;

  const listChild = data?.links?.map((item, index) => {
    return (
      <TouchableOpacity key={item?.id || index} onPress={() => handleOpenMenu?.(item?.link)}>
        <Text style={styles.dropDownTitle}>{`${item.lable?.trim()}` || ''}</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[styles.menu, isActive && { backgroundColor: 'rgba(106, 106, 106, 0.85)' }]}
        onPress={() => onPressMenu?.(data.title)}>
        <Text style={styles.menuTitle}>{data?.title || ''}</Text>
        <Icon
          name={isActive ? 'caretdown' : 'caretup'}
          fontName="AntDesign"
          size={10}
          color="white"
        />
      </TouchableOpacity>
      {isActive && <View style={styles.dropDown}>{listChild}</View>}
    </View>
  );
};

export default memo(DropDown);
