import React, { memo, useMemo } from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';
import { useSelector } from 'react-redux';
import CardEmployer from 'components/CardEmployer';

const EmployerListScreen = () => {
  const { employers } = useSelector(state => state.employers);
  const employersProcessed = useMemo(() => {
    return Object.values(employers.data || {});
  }, [employers]);

  const renderList = ({ item, index }) => {
    return (
      <CardEmployer
        key={item?.id || index}
        data={item}
        containerStyle={styles.employersContainer}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={employersProcessed || []}
        style={styles.flex1}
        keyExtractor={(item, index) => {
          item?.id || index;
        }}
        renderItem={renderList}
      />
    </View>
  );
};

export default memo(EmployerListScreen);
