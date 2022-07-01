import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Icon } from 'components/';
const Component = props => {
  const { data, onChange, defaultButtonText, id } = props;
  return (
    <View style={styles.container}>
      <SelectDropdown
        buttonStyle={styles.wrapper}
        buttonTextStyle={styles.buttonText}
        rowTextStyle={styles.rowTextStyle}
        defaultButtonText={defaultButtonText || 'Chọn ví cần rút'}
        data={data}
        renderDropdownIcon={() => (
          <Icon name="caretdown" fontName="AntDesign" size={15} color={CUSTOM_COLOR.BasicGray} />
        )}
        onSelect={(selectedItem, index) => {
          onChange?.(selectedItem, index, id);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 40,
    backgroundColor: BACKGROUND_COLOR.White,
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.BasicGray,
    borderRadius: 10
  },
  buttonText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black
  },
  rowTextStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black
  }
});

export default memo(Component);
