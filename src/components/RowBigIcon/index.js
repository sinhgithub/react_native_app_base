import React, { memo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const RowBigIcon = props => {
  const { data, onPress } = props;
  const [sizeRowRowBigIconItem, setSizeRowRowBigIconItem] = useState({});

  const listIcon = data?.map((icon, index) => {
    return (
      <TouchableOpacity
        key={icon.id}
        style={[styles.rowRowBigIconItem, { height: sizeRowRowBigIconItem.width || 'auto' }]}
        onLayout={e => {
          if (e) {
            setSizeRowRowBigIconItem(e.nativeEvent.layout);
          }
        }}
        onPress={() => onPress?.(icon.id)}>
        {icon.icon}
        <Text style={styles.rowRowBigIconItemText}>{icon.featureName}</Text>
      </TouchableOpacity>
    );
  });
  return <View style={styles.rowRowBigIcon}>{data?.length > 0 && listIcon}</View>;
};

export default memo(RowBigIcon);
