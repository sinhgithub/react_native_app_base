import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'components/';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import FastImage from 'react-native-fast-image';
import { SPACING } from 'constants/size';
import { useSelector } from 'react-redux';
import { default_avatar } from 'assets/images';
import { getImageFromHost } from 'configs/appConfigs';

const AvatarArea = () => {
  const { user } = useSelector(state => state.user);
  return (
    <View style={styles.avatarArea}>
      <View style={styles.avatarAreaImage}>
        {user?.avatar ? (
          <FastImage
            source={{
              uri: getImageFromHost(user?.avatar)
            }}
            style={styles.avatarImage}
            resizeMode="stretch"
          />
        ) : (
          <Image source={default_avatar} style={styles.avatarImage} resizeMode="stretch" />
        )}
        <TouchableOpacity style={styles.changeCamera}>
          <Icon fontName="AntDesign" name="camera" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <View style={styles.infoStatusArea}>
          {/* <Icon fontName="FontAwesome" name="user-secret" size={20} color="red" /> */}
          <Text style={styles.statusText}>{user?.name}</Text>
        </View>
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusText: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black,
    paddingLeft: SPACING.Normal
  },
  codeText: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Gray,
    marginTop: SPACING.Small
  },
  changeCamera: {
    position: 'absolute',
    bottom: -5,
    right: 0
  }
});

export default AvatarArea;
