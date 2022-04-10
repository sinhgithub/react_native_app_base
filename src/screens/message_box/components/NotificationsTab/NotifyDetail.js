import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import React, { memo, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'components/';
import { SPACING } from 'constants/size';
import { getDetailNotifyHandle } from 'actions/notification';
import { useDispatch, useSelector } from 'react-redux';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import moment from 'moment';

const NotifyDetail = props => {
  const dispatch = useDispatch();
  const { id } = props?.route?.params;

  const { loadingNotifyDetail, notifyDetail } = useSelector(state => state.notification);

  const onOpenLink = () => {};

  useEffect(() => {
    dispatch(
      getDetailNotifyHandle({
        params: id,
        success: () => {},
        failure: () => {},
        handleErr: () => {}
      })
    );
  }, [dispatch, id]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.flex1}>
        <View style={styles.content}>
          <View style={styles.titleArea}>
            <Text style={styles.titleText}>{notifyDetail?.title}</Text>
            <Text style={styles.date}>
              {notifyDetail?.createdAt ? moment(notifyDetail?.createdAt).format('DD/MM/YYYY') : ''}
            </Text>
          </View>
          <View style={styles.contentDetailWrapper}>
            <Text style={styles.contentDetailText}>{notifyDetail?.content}</Text>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <Button
            type="modal"
            title={notifyDetail?.linkTo || ''}
            containerStyle={styles.button}
            titleStyle={styles.titleButton}
            submitMethod={onOpenLink}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White,
    paddingVertical: SPACING.Small,
    paddingHorizontal: SPACING.XXNormal
  },
  flex1: {
    flex: 1
  },
  content: {
    // flex: 1
  },
  titleArea: {
    marginTop: SPACING.Large
  },
  titleText: {
    fontSize: FONT_SIZE.Heading,
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black,
    lineHeight: LINE_HEIGHT.Heading
  },
  date: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: 'gray',
    lineHeight: LINE_HEIGHT.BodyText,
    marginTop: SPACING.Small
  },
  contentDetailWrapper: {
    marginTop: SPACING.Large
  },
  contentDetailText: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black,
    lineHeight: LINE_HEIGHT.BodyText
  }
});

export default memo(NotifyDetail);
