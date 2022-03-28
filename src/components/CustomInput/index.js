import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import React, { memo } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const CustomInput = props => {
  const { type, onChange } = props;

  const renderInput = () => {
    switch (type) {
      case 'text':
        return <TextInput onChangeText={v => onChange?.(v)} style={styles.input} />;
      case 'select':
        return (
          <View>
            <Picker
              selectedValue={'java'}
              style={styles.select}
              onValueChange={(itemValue, itemIndex) => {}}
              mode="dropdown">
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        );
      default:
        return <TextInput style={styles.input} />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>label input</Text>
      {renderInput()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.BasicGray,
    minHeight: 40,
    borderRadius: 10
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
