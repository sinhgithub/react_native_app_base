import { View, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { windowWidth } from 'constants/size';
import { scale } from 'utils/responsive';
import { CUSTOM_COLOR } from 'constants/colors';
import AppText from 'components/AppText';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import StyledTouchable from 'components/StyledTouchable';

const renderItem = (data, lastItem = false, onPress) => {
  return (
    <StyledTouchable onPress={() => onPress(data)} key={data.id}>
      <AppText style={styles.title} translate>
        {data.title}
      </AppText>
      {!lastItem && <View style={styles.separatorView} />}
    </StyledTouchable>
  );
};
const RegisterTypeModal = ({
  visible,
  data,
  onHideModal = () => {},
  title,
  onPressItem = () => {}
}) => {
  return (
    <Modal
      backdropPressToClose={true}
      onBackdropPress={onHideModal}
      isVisible={visible}
      style={[styles.modalContainer]}
      onSwipeComplete={onHideModal}
      coverScreen={true}
      swipeDirection={['down']}>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          {data.map((item, index) => {
            return renderItem(item, index === data.length - 1, onPressItem);
          })}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    margin: 0
  },
  container: {
    width: windowWidth * 0.9,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    backgroundColor: CUSTOM_COLOR.White,
    paddingBottom: scale(30),
    alignSelf: 'center'
  },
  separatorView: {
    height: scale(1),
    backgroundColor: CUSTOM_COLOR.Gray
  },
  body: {
    paddingHorizontal: scale(32),
    paddingTop: scale(5)
  },
  title: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: '#464646',
    alignSelf: 'center',
    paddingVertical: scale(16)
  }
});

export default RegisterTypeModal;
