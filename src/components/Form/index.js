import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, Animated, Keyboard } from 'react-native';
import styles from './styles';
import Input from './Input';

const Form = props => {
  const { refScroll, data, onChange, onSubmit, defaultTextSelect, dataInputSelect, onSelect } =
    props;
  const [focus, setFocus] = useState(null);
  const processedData = useMemo(() => {
    const result = [];
    if (data) {
      for (const k in data) {
        result.push(data[k]);
      }
    }
    return result.sort((a, b) => a.order - b.order);
  }, [data]);

  // console.log(processedData, 'processedData');

  const onFocus = useCallback(
    index => {
      setFocus(index);
      // refScroll.current.scrollTo({ x: 0, y: 100, animated: true });
    },
    [refScroll]
  );

  const onBlur = useCallback(() => {
    setFocus(null);
  }, []);

  const listInput = processedData?.map((item, index) => {
    return (
      <View style={styles.formGroup} key={item.id || index}>
        <Input
          placeholder={item.placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          data={{ ...item, index }}
          focused={focus}
          onChange={onChange}
          defaultTextSelect={defaultTextSelect}
          dataInputSelect={dataInputSelect}
          onSelect={onSelect}
        />
      </View>
    );
  });

  return listInput;
};

export default memo(Form);
