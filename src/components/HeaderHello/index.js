import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { AppText } from 'src/components';
import { useSelector } from 'react-redux';

const lineMenu = Array(3).fill('');

const HeaderHello = props => {
  const { user } = useSelector(state => state.user);

  return (
    <View style={styles.headerHello}>
      <View style={styles.headerHelloLeft}>
        <AppText style={styles.headerHelloLeftText} translate>
          common.hello
        </AppText>
        {!!user?.name && (
          <Text numberOfLines={1} style={styles.headerHelloLeftTextName}>
            , {user?.name}
          </Text>
        )}
      </View>
      <View style={styles.headerHelloRight}>
        {lineMenu.map((item, index) => (
          <View
            style={[
              styles.headerHelloRightLineMenu,
              index === lineMenu.length - 1 && { width: 18 }
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default memo(HeaderHello);
