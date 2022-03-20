import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { covidSecuriry } from 'assets/images';
import { Icon } from 'components/';
import { SPACING } from 'constants/size';
import { FONT_SIZE, FONT_FAMILY } from 'constants/appFonts';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';

const CovidUpdateButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.titleArea}>
        <Image source={covidSecuriry} style={styles.imgae} resizeMode="stretch" />
        <Text style={styles.titleText}>Covid passport</Text>
      </View>
      <Icon name="right" fontName="AntDesign" size={20} color={'white'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: BACKGROUND_COLOR.Orange,
    borderRadius: 30,
    paddingHorizontal: SPACING.XNormal,
    paddingVertical: SPACING.XSmall
  },
  titleArea: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontSize: FONT_SIZE.Title3,
    fontFamily: FONT_FAMILY.BOLD,
    paddingLeft: SPACING.XNormal,
    color: TEXT_COLOR.White
  },
  imgae: {
    width: 50,
    height: 40
  }
});

export default CovidUpdateButton;
