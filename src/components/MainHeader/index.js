import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ICBack } from 'assets/icons';
import { AppText } from 'src/components';
import { useNavigation } from '@react-navigation/native';

const MainHeader = props => {
  const {
    mainHeaderRightText,
    mainHeaderMiddleText,
    containerStyle,
    mainHeaderRightTextStyle,
    mainHeaderMiddleTextStyle
  } = props;
  const navigation = useNavigation();
  const onPressGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <View style={[styles.mainHeader, containerStyle]}>
      <TouchableOpacity style={styles.mainHeaderLeft} onPress={onPressGoBack}>
        <ICBack />
        <AppText translate style={styles.mainHeaderLeftText}>
          common.go_back
        </AppText>
      </TouchableOpacity>
      {!!mainHeaderRightText && (
        <View style={styles.mainHeaderRight}>
          <Text
            numberOfLines={1}
            style={[styles.mainHeaderRightText, mainHeaderRightTextStyle]}
            translate>
            {mainHeaderRightText}
          </Text>
        </View>
      )}
    </View>
  );
};

export default memo(MainHeader);
