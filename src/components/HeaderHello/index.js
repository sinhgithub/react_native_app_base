import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { AppText } from 'src/components';
import { useSelector } from 'react-redux';

const lineMenu = Array(3).fill('');

const HeaderHello = props => {
  const { name } = useSelector(state => state.auth.memberInfo);
  return (
    <View style={styles.headerHello}>
      <View style={styles.headerHelloLeft}>
        <AppText style={styles.headerHelloLeftText} translate>
          common.hello
        </AppText>
        {!!name && <Text style={styles.headerHelloLeftTextName}>, {name}</Text>}
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
