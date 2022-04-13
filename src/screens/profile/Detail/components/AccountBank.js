import React, { memo } from 'react';
import { View } from 'react-native';
import { BackgroundTextBox } from 'components/';

const AccountBank = props => {
  const { buttonStyle, buttonGradient, buttonTextStyle } = props;
  return (
    <View>
      <BackgroundTextBox
        gradient={buttonGradient}
        containerStyle={buttonStyle}
        title={'Tai khoan nhan thu lao'}
        textStyle={buttonTextStyle}
      />
    </View>
  );
};

export default memo(AccountBank);
