import React, { memo, useCallback, useEffect, useState } from 'react';
import { View, Text, Animated, Keyboard } from 'react-native';
import styles from './styles';
import Input from './Input';

const Form = props => {
  const { refScroll } = props;
  const [focus, setFocus] = useState(null);

  const onFocus = useCallback(
    index => {
      setFocus(index);
      refScroll.current.scrollTo({ x: 0, y: 100, animated: true });
    },
    [refScroll]
  );

  const onBlur = useCallback(() => {
    setFocus(null);
  }, []);

  const listInput = Array(5)
    .fill({})
    .map((item, index) => {
      return (
        <View style={styles.formGroup} key={item.id || index}>
          <Input onFocus={onFocus} onBlur={onBlur} data={{ ...item, index }} focused={focus} />
        </View>
      );
    });

  return listInput;
};

export default memo(Form);
