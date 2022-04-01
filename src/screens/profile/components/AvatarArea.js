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
            uri: 'https://static.vecteezy.com/system/resources/previews/000/420/940/non_2x/avatar-icon-vector-illustration.jpg'
          }}
          style={styles.avatarImage}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.info}>
        <View style={styles.infoStatusArea}>
          <Icon fontName="FontAwesome" name="user-secret" size={20} color="red" />
          <Text style={styles.statusText}>Hồ sơ chưa xác thực</Text>
        </View>
        {/* <Text style={styles.codeText}>Ma ho so 459483</Text> */}
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
    justifyContent: 'center',
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
