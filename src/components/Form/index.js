import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { getListDistrictHandle } from 'actions/master_data';

const Form = props => {
  const {
    refScroll,
    data,
    onChange,
    dataInputSelect,
    onSelect,
    defaultTextSelect,
    listDistrictDefault,
    values
  } = props;
  const { provinces, districts } = useSelector(state => state.masterData);
  const { user } = useSelector(state => state.user);
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

  const onFocus = useCallback(
    index => {
      setFocus(index);
    },
    [refScroll]
  );

  const onBlur = useCallback(() => {
    setFocus(null);
  }, []);
  const provinceProcessed = useMemo(() => {
    let result = [];
    if (provinces) {
      for (const k in provinces) {
        result.push(provinces[k].name);
      }
    }
    return result;
  }, [provinces]);

  const listInput = processedData?.map((item, index) => {
    let textSelect = '';
    if (item.id === 'province') {
      if (user?.jobSeeker?.province?.name) {
        textSelect = user?.jobSeeker?.province?.name;
      } else {
        textSelect = 'Chọn Tỉnh/ Thành';
      }
    } else if (item.id === 'district') {
      if (user?.jobSeeker?.district?.name) {
        textSelect = user?.jobSeeker?.district?.name;
      } else {
        textSelect = 'Chọn Quận/ Huyện';
      }
    }
    const inputSelectData =
      item.id === 'province'
        ? provinceProcessed
        : item.id === 'district'
        ? listDistrictDefault
        : null;
    return (
      <View style={styles.formGroup} key={item.id || index}>
        <Input
          placeholder={item.placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          data={{ ...item, index }}
          focused={focus}
          onChange={onChange}
          defaultTextSelect={textSelect || defaultTextSelect}
          dataInputSelect={inputSelectData || dataInputSelect}
          onSelect={onSelect}
          values={values}
        />
      </View>
    );
  });

  return listInput;
};

export default memo(Form);
