import React, { memo, useCallback, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { CardJob, CardJobSkeleton } from 'components/';
import { useSelector } from 'react-redux';
import { empty_quote } from 'assets/images';
import { BACKGROUND_COLOR } from 'constants/colors';
import { Button } from 'components/';
import { useNavigation } from '@react-navigation/native';
import SCREEN_NAME from 'constants/screens';

const Working = props => {
  const listJobContinue = useSelector(state => state?.listJob?.listAllJob?.data);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const renderItem = ({ item }) => {
    return <CardJob onPress={() => {}} data={item} />;
  };

  const renderListEmptyComponent = () => {
    return (
      <View style={styles.imageFindJob}>
        <Image source={empty_quote} style={styles.image} resizeMode="contain" />
        <Text>Bạn chưa nhận công việc nào</Text>
      </View>
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const listSkeleton = Array(5)
    .fill('')
    .map((v, i) => {
      return <CardJobSkeleton key={i} />;
    }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        listSkeleton
      ) : (
        <FlatList
          contentContainerStyle={styles.flex1}
          keyExtractor={(item, index) => `${item?.id || index}`}
          data={[]}
          renderItem={renderItem}
          ListEmptyComponent={renderListEmptyComponent()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  container: {
    flex: 1
  },
  imageFindJob: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '50%'
  }
});

export default memo(Working);
