import React, { memo } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { Icon } from 'components/';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { Shadow } from 'constants/stylesCSS';

const MenuItem = props => {
  const { onPress, title, id } = props;
  return (
    <TouchableOpacity style={styles.menuItem} onPress={() => onPress(id)}>
      <Icon name="exit-to-app" fontName="MaterialIcons" size={25} color="red" />
      <Text style={styles.menuName}>{title || ''}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: SPACING.XNormal,
    padding: SPACING.XNormal,
    ...Shadow
  },
  menuName: {
    fontSize: FONT_SIZE.BodyText,
    color: 'black',
    fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: '500',
    marginLeft: SPACING.XNormal
  }
});

export default memo(MenuItem);
