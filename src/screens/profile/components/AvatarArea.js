import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'components/';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import FastImage from 'react-native-fast-image';
import { SPACING } from 'constants/size';

const AvatarArea = () => {
  return (
    <View style={styles.avatarArea}>
      <View style={styles.avatarAreaImage}>
        <FastImage
          source={{
            uri: 'https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'
          }}
          style={styles.avatarImage}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.info}>
        <View style={styles.infoStatusArea}>
          <Icon fontName="FontAwesome" name="user-secret" size={20} color="red" />
          <Text style={styles.statusText}>Ho so chua xac thuc</Text>
        </View>
        <Text style={styles.codeText}>Ma ho so 459483</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarArea: {
    flexDirection: 'row'
  },
  avatarAreaImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR.BasicGray
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  info: {
    justifyContent: 'flex-end',
    paddingLeft: SPACING.XXNormal
  },
  infoStatusArea: {
    flexDirection: 'row'
  },
  statusText: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.RedBasic,
    paddingLeft: SPACING.Normal
  },
  codeText: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Gray,
    marginTop: SPACING.Small
  }
});

export default AvatarArea;