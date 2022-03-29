import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import React, { memo } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import SelectDropdown from './SelectDropdown';

const CustomInput = props => {
  const { type, onChange, label, data, keyboardType, keyInput, placeholder } = props;

  const renderInput = () => {
    switch (type) {
      case 'text':
        return (
          <TextInput
            onChangeText={text => onChange?.(keyInput, text)}
            style={styles.input}
            keyboardType={keyboardType}
            placeholder={placeholder}
          />
        );
      case 'select':
        return (
          <View>
            <SelectDropdown onChange={onChange} data={data} />
          </View>
        );
      default:
        return (
          <TextInput
            onChangeText={text => onChange?.(keyInput, text)}
            style={styles.input}
            keyboardType={keyboardType}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {renderInput()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.XNormal
  },
  input: {
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.BasicGray,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: SPACING.XNormal,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black
  },
  label: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black,
    marginBottom: SPACING.XNormal
  },
  select: {
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Red,
    minHeight: 40,
    justifyContent: 'center'
  }
});

export default memo(CustomInput);
