import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { AppText } from 'src/components';
import { scale } from 'utils/responsive';
import { CUSTOM_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { modalType } from 'constants/data_constants';
import Icon from 'components/Icon';

const InputView = props => {
  const {
    onPress,
    label,
    id,
    placeholder,
    containerStyle,
    inputContainerStyle,
    hideLabel,
    openModalType,
    require
  } = props;

  const renderItemRight = () => {
    switch (openModalType) {
      case modalType.calendar:
        return <Icon fontName="AntDesign" name="calendar" size={25} />;
      default:
        return null;
    }
  };
  return (
    <View
      style={[
        {
          marginTop: scale(20)
        },
        containerStyle
      ]}>
      {!hideLabel && (
        <View style={{ flexDirection: 'row' }}>
          <AppText
            style={{
              marginBottom: SPACING.Fit,
              color: 'gray',
              marginRight: SPACING.Small
            }}>
            {label || ''}
          </AppText>
          {require && (
            <Icon fontName="Entypo" name="star" size={10} color={CUSTOM_COLOR.RedBasic} />
          )}
        </View>
      )}

      <View
        onStartShouldSetResponder={() => {
          onPress?.(id);
        }}
        style={[
          {
            borderRadius: scale(5),
            paddingVertical: scale(12),
            paddingHorizontal: scale(12),
            borderWidth: 1,
            flexDirection: 'row',
            borderColor: CUSTOM_COLOR.BasicGray
          },
          inputContainerStyle
        ]}>
        <Text
          onPress={() => {
            onPress?.(id);
          }}
          style={{ flex: 1, color: 'gray' }}>
          {placeholder || ''}
        </Text>
        {renderItemRight()}
      </View>
    </View>
  );
};

export default memo(InputView);
