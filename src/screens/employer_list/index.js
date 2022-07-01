import React, { memo, useCallback, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import CardEmployer from 'components/CardEmployer';
import SCREENS_NAME from 'constants/screens';
import { useNavigation } from '@react-navigation/core';

const EmployerListScreen = () => {
  const { employers } = useSelector(state => state.employers);
  const navigation = useNavigation();
  const employersProcessed = useMemo(() => {
    return Object.values(employers.data || {});
  }, [employers]);

  const onPressEmployerCard = useCallback(
    employer => {
      navigation.navigate(SCREENS_NAME.EMPLOYER_DETAIL_SCREEN, { id: employer.id });
    },
    [navigation]
  );

  const renderList = ({ item, index }) => {
    return (
      <CardEmployer
        key={item?.id || index}
        data={item}
        containerStyle={styles.employersContainer}
        onPress={onPressEmployerCard}
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
