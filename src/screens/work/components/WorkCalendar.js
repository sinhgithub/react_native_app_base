import React, { memo, useMemo, useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { CalendarCustom } from 'components/';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { calendarWorkHandle, updateCalendarWorkHandle } from 'actions/calendar_work';
import { showCompleteModal, showConfirmModal } from 'actions/system';
import { FlatList } from 'react-native-gesture-handler';
import { CardJob, Icon } from 'components/';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { v4 } from 'uuid';
import { Shadow } from 'constants/stylesCSS';
import moment from 'moment';
import Button from 'components/Button';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import _ from 'lodash';

const WorkCalendar = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { calendarWork, loading } = useSelector(state => state?.calendarWork);
  const [detailModal, setDetailModal] = useState(null);
  const list = useMemo(() => {
    const result = [];
    for (const k in calendarWork) {
      result.push(calendarWork[k]);
    }
    return result;
  }, [calendarWork]);

  useEffect(() => {
    dispatch(
      calendarWorkHandle({
        handleErr: v => {
          //do no thing
        }
      })
    );
  }, [dispatch]);

  const onPressDay = useCallback(
    (id, date, data) => {
      const markedDates = [];
      data.forEach(calendar => {
        const dateTmp = moment(new Date(calendar.date)).format('YYYY-MM-DD');
        markedDates.push(dateTmp);
      }, []);
      if (markedDates?.includes(date.dateString)) {
        data.find(value => {
          const detailDay = moment(value.date).format('YYYY-MM-DD');
          if (detailDay === date.dateString) {
            setDetailModal(value);
          }
        });
      } else {
        return;
      }
    },
    [setDetailModal]
  );

  const onCheckIn = data => {
    const onConfirm = () => {
      dispatch(
        updateCalendarWorkHandle({
          params: {
            id: data.id,
            state: 'CHECK_IN',
            time: moment().format('HH:mm:ss')
          },
          callback: () => {
            dispatch(
              showCompleteModal({
                title: 'Chúc mừng',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Bạn đã check in thành công',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {
                  dispatch(
                    calendarWorkHandle({
                      handleErr: v => {
                        //do no thing
                      }
                    })
                  );
                },
                onClose: () => {
                  // navigation.goBack();
                }
              })
            );
          }
        })
      );
    };
    dispatch(
      showConfirmModal({
        title: 'Bạn có muốn check in',
        icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
        content: 'Vui lòng xác nhận check in. Thao tác sẽ không phục hồi được !',
        buttonTitleReject: 'Huỷ bỏ',
        buttonTitleConfirm: 'Xác nhận',
        onConfirm,
        onClose: () => {},
        onReject: () => {}
      })
    );
    setDetailModal(null);
  };

  const onCheckOut = data => {
    const onConfirm = () => {
      dispatch(
        updateCalendarWorkHandle({
          params: {
            id: data.id,
            state: 'CHECK_OUT',
            time: moment().format('HH:mm:ss')
          },
          callback: () => {
            dispatch(
              showCompleteModal({
                title: 'Chúc mừng',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Bạn đã check out thành công',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {
                  dispatch(
                    calendarWorkHandle({
                      handleErr: v => {
                        //do no thing
                      }
                    })
                  );
                },
                onClose: () => {
                  // navigation.goBack();
                }
              })
            );
          }
        })
      );
    };
    dispatch(
      showConfirmModal({
        title: 'Bạn có muốn check out',
        icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
        content: 'Vui lòng xác nhận check out. Thao tác sẽ không phục hồi được !',
        buttonTitleReject: 'Huỷ bỏ',
        buttonTitleConfirm: 'Xác nhận',
        onConfirm,
        onClose: () => {},
        onReject: () => {}
      })
    );
    setDetailModal(null);
  };

  const closeModal = useCallback(() => {
    setDetailModal(null);
  }, []);

  const onCancel = data => {
    const onConfirm = () => {
      dispatch(
        updateCalendarWorkHandle({
          params: {
            id: data.id,
            state: 'CANCLE',
            time: moment().format('HH:mm:ss')
          },
          callback: () => {
            dispatch(
              showCompleteModal({
                title: 'Thành công',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Bạn đã báo nghĩ thành công',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {
                  dispatch(
                    calendarWorkHandle({
                      handleErr: v => {
                        //do no thing
                      }
                    })
                  );
                },
                onClose: () => {
                  // navigation.goBack();
                }
              })
            );
          },
          failure: () => {
            dispatch(
              showCompleteModal({
                title: 'Gởi yêu cầu thất baị',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Bạn đã báo nghĩ không thành công. Xin vui lòng kiểm tra lại',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {},
                onClose: () => {
                  // navigation.goBack();
                }
              })
            );
          },
          handleErr: () => {
            dispatch(
              showCompleteModal({
                title: 'Gởi yêu cầu thất baị',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Bạn đã báo nghĩ không thành công. Xin vui lòng kiểm tra lại',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {},
                onClose: () => {
                  // navigation.goBack();
                }
              })
            );
          }
        })
      );
    };
    dispatch(
      showConfirmModal({
        title: 'Bạn có muốn nghỉ hôm nay ?',
        icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
        content: 'Vui lòng xác nhận nghỉ. Thao tác sẽ không phục hồi được !',
        buttonTitleReject: 'Huỷ bỏ',
        buttonTitleConfirm: 'Xác nhận',
        onConfirm,
        onClose: () => {},
        onReject: () => {}
      })
    );
    setDetailModal(null);
  };

  const buttonsConfig = [
    {
      id: 'userChecking',
      title: 'Check in',
      onClick: onCheckIn
    },
    {
      id: 'userCheckout',
      title: 'Check out',
      onClick: onCheckOut
    },
    {
      id: 'userCancel',
      title: 'Nghỉ',
      onClick: onCancel
    },
    {
      id: 'close',
      title: 'Đóng',
      onClick: closeModal
    }
  ];

  const renderItem = ({ item }) => {
    const markedDates = {};
    item.forEach(calendar => {
      const date = moment(calendar.date).format('YYYY-MM-DD');
      markedDates[date] = { selected: true, color: 'blue', textColor: 'red' };
    }, []);
    return (
      <View style={styles.wrapper} key={v4()}>
        <CardJob onPress={() => {}} data={item[0].job} hideAllFlag hideBorder />
        <CalendarCustom
          data={item}
          markedDates={markedDates}
          onPressDay={onPressDay}
          id={item[0].id}
        />
      </View>
    );
  };

  const renderModalDetail = data => {
    console.log(data, 'datadtadtadt');
    const date = moment(data?.date).format('DD-MM-YYYY');
    const employerChecking = data?.checkInTime
      ? moment(data?.checkInTime).format('DD-MM-YYYY HH:mm')
      : 'Chưa check in';
    const employerCheckout = data?.checkOutTime
      ? moment(data?.checkInTime).format('DD-MM-YYYY HH:mm')
      : 'Chưa check out';
    const employerCancel = data?.cancelTime
      ? moment(data?.checkInTime).format('DD-MM-YYYY HH:mm')
      : 'none';
    const userChecking = data?.userCheckinTime
      ? moment(data?.userCheckinTime).format('DD-MM-YYYY HH:mm')
      : 'Chưa check in';
    const userCheckout = data?.userCheckoutTime
      ? moment(data?.userCheckoutTime).format('DD-MM-YYYY HH:mm')
      : 'Chưa check out';
    const userCancel = data?.userCancelTime
      ? moment(data?.userCancelTime).format('DD-MM-YYYY HH:mm')
      : 'none';
    const mappedData = [
      {
        id: 'timeWork',
        title: 'Giờ làm việc',
        value: `${data?.timeFrom} - ${data?.timeTo}`
      },
      {
        id: 'dayWork',
        title: 'Ngày làm việc',
        value: date
      },
      {
        id: 'employerChecking',
        title: 'Người tuyển dụng check in',
        value: employerChecking
      },
      {
        id: 'employerCheckout',
        title: 'Người tuyển dụng check out',
        value: employerCheckout
      },
      {
        id: 'employerCancel',
        title: 'Người tuyển dụng huỷ',
        value: employerCancel
      },
      {
        id: 'userChecking',
        title: 'Check in',
        value: userChecking
      },
      {
        id: 'userCheckout',
        title: 'Check out',
        value: userCheckout
      },
      {
        id: 'userCancel',
        title: 'Nghỉ',
        value: userCancel
      }
    ];

    const listValue = mappedData.map(item => {
      return (
        <View key={item.id} style={styles.sectionModalDetail}>
          <Text style={styles.sectionModalDetailTitle}>{item.title}</Text>
          <Text style={styles.sectionModalDetailValue}>{item.value}</Text>
        </View>
      );
    });

    let buttonData = [...buttonsConfig];
    if (userChecking !== 'Chưa check in') {
      buttonData = buttonData.filter(button => button.id !== 'userChecking');
    }
    if (userCheckout !== 'Chưa check out') {
      buttonData = buttonData.filter(button => button.id !== 'userCheckout');
    }
    if (userCancel !== 'none') {
      buttonData = buttonData.filter(
        button =>
          button.id !== 'userCancel' && button.id !== 'userCheckout' && button.id !== 'userChecking'
      );
    }

    const listButton = buttonData.map(button => {
      return (
        <TouchableOpacity
          style={[styles.buttonDetail, { width: `${100 / buttonData?.length - 1}%` }]}
          onPress={() => button?.onClick?.(data)}
          key={button.id}>
          <Text style={styles.buttonTitle}>{button.title}</Text>
        </TouchableOpacity>
      );
    });

    return (
      <View style={styles.contentDetail}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Chi tiết công việc</Text>
          <TouchableOpacity onPress={closeModal}>
            <Icon name="closecircle" fontName="AntDesign" size={25} color={CUSTOM_COLOR.RedBasic} />
          </TouchableOpacity>
        </View>
        <Text style={styles.modalDetailJobName}>{data?.job?.title}</Text>
        {listValue}
        <View style={styles.buttonArea}>{listButton}</View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendar}>
        <FlatList keyExtractor={(item, index) => index} renderItem={renderItem} data={list || []} />
      </View>
      <Modal
        visible={detailModal !== null}
        style={styles.modal}
        animationType="fade"
        transparent={true}
        closeModal={closeModal}>
        <View style={styles.wrapperModal}>
          <View style={styles.closeModal} onStartShouldSetResponder={closeModal} />
          {renderModalDetail(detailModal)}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  container: {
    flex: 1
  },
  calendar: {
    flex: 1
  },
  wrapper: {
    margin: SPACING.XNormal,
    ...Shadow,
    backgroundColor: BACKGROUND_COLOR.White,
    borderRadius: 20
  },
  modal: {},
  closeModal: {
    zIndex: 0,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  wrapperModal: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  contentDetail: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: BACKGROUND_COLOR.BasicGray,
    padding: SPACING.XXNormal,
    borderRadius: 10
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headingText: {
    fontSize: FONT_SIZE.Heading,
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.RedBasic
  },
  modalDetailJobName: {
    marginTop: SPACING.Large,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BodyText,
    marginBottom: SPACING.XXNormal,
    color: TEXT_COLOR.Black,
    textTransform: 'uppercase'
  },
  sectionModalDetail: {
    marginBottom: SPACING.XNormal
  },
  sectionModalDetailTitle: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black,
    marginBottom: SPACING.Normal
  },
  sectionModalDetailValue: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black
  },
  buttonDetail: {
    marginTop: 10,
    backgroundColor: 'red',
    paddingHorizontal: SPACING.Small,
    paddingVertical: SPACING.XXNormal,
    borderRadius: 10
  },
  buttonTitle: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.White
  }
});

export default memo(WorkCalendar);
