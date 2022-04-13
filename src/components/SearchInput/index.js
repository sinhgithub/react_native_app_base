import React, { memo, useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'components/';
import { BACKGROUND_COLOR } from 'constants/colors';

const SearchInput = props => {
  const { onChange, value, hideSearchIcon, onFilter } = props;
  const [isActiveFilter, setIsActiveFilter] = useState(false);

  const handleClickFilter = () => {
    setIsActiveFilter(true);
  };
  useEffect(() => {
    if (isActiveFilter) {
      onFilter?.();
      setIsActiveFilter(false);
    }
  }, [isActiveFilter, onFilter]);

  return (
    <View style={styles.searchInput}>
      <View style={styles.searchArea}>
        {!hideSearchIcon && (
          <View style={styles.searchAreaIcon}>
            <Icon name="search" fontName="FontAwesome" size={20} color="gray" />
          </View>
        )}
        <TextInput style={styles.searchAreaInput} onChangeText={onChange} value={value || ''} />
      </View>
      <TouchableOpacity
        style={[
          styles.filterArea,
          isActiveFilter && { backgroundColor: BACKGROUND_COLOR.RedBasic }
        ]}
        onPress={handleClickFilter}>
        <Icon name="filter" fontName="FontAwesome" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default memo(SearchInput);
