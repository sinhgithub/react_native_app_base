import React, { memo, useMemo, useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
import { CalendarCustom } from 'components/';
import { useSelector, useDispatch } from 'react-redux';
import { calendarWorkHandle, updateCalendarWorkHandle } from 'actions/calendar_work';
import { showCompleteModal } from 'actions/system';
import { FlatList } from 'react-native-gesture-handler';
import { CardJob, Icon } from 'components/';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { Shadow } from 'constants/stylesCSS';
import moment from 'moment';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import ModalSelectTime from 'components/Modal/ModalSelectTime';
import { find } from 'assets/images';
const showModalTimeCheckIn = 'showModalTimeCheckIn';

const WorkCalendar = props => {
  const dispatch = useDispatch();
  const { calendarWork } = useSelector(state => state?.calendarWork);
  const [detailModal, setDetailModal] = useState(null);
  const list = useMemo(() => {
    const result = [];
    for (const k in calendarWork) {
      result.push(calendarWork[k]);
    }

    return result.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }, [calendarWork]);

  useEffect(() => {
    dispatch(
      calendarWorkHandle({
        handleErr: () => {}
      })
    );
  }, [dispatch]);

  const onPressDay = useCallback((id, date, data) => {
    const markedDates = [];
    data.forEach(calendar => {
      const dateTmp = moment(calendar.date).format('YYYY-MM-DD');
      markedDates.push(dateTmp);
    }, []);
    if (markedDates?.includes(date.dateString)) {
      data.forEach(value => {
        const detailDay = moment(value.date).format('YYYY-MM-DD');
        if (detailDay === date.dateString) {
          setDetailModal(value);
        }
      });
    } else {
      return;
    }
  }, []);

  const [modalTimeCheckIn, setModalTimeCheckIn] = useState(null);
  const [timeCheckIn, setTimeCheckIn] = useState(null);
  const handleChangeCheckInTime = useCallback((name, value) => {
    setTimeCheckIn({ [name]: value });
  }, []);
  const onCheckIn = data => {
    setModalTimeCheckIn(data);
    setDetailModal(null);
  };

  const [modalTimeCheckOut, setModalTimeCheckOut] = useState(null);
  const [timeCheckOut, setTimeCheckOut] = useState(null);
  const handleChangeCheckOutTime = useCallback((name, value) => {
    setTimeCheckOut({ [name]: value });
  }, []);

  const onConfirmCheckIn = () => {
    setModalTimeCheckIn(null);
    if (!timeCheckIn) {
      return;
    }
    dispatch(
      updateCalendarWorkHandle({
        params: {
          id: modalTimeCheckIn.id,
          state: 'CHECK_IN',
          time: moment(timeCheckIn.timeCheckIn).format('HH:mm:ss')
        },
        callback: () => {
          dispatch(
            showCompleteModal({
              title: 'Ch??c m???ng',
              icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
              content: 'B???n ???? check in th??nh c??ng',
              buttonTitle: 'X??c nh???n',
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

  const onCheckOut = data => {
    setModalTimeCheckOut(data);
    setDetailModal(null);
  };

  const onConfirmCheckOut = () => {
    setModalTimeCheckOut(null);
    if (!timeCheckOut) {
      return;
    }
    dispatch(
      updateCalendarWorkHandle({
        params: {
          id: modalTimeCheckOut.id,
          state: 'CHECK_OUT',
          time: moment(timeCheckOut.timeCheckOut).format('HH:mm:ss')
        },
        callback: () => {
          dispatch(
            showCompleteModal({
              title: 'Ch??c m???ng',
              icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
              content: 'B???n ???? check out th??nh c??ng',
              buttonTitle: 'X??c nh???n',
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

  const closeModal = useCallback(() => {
    setDetailModal(null);
  }, []);

  const [modalTimeCancel, setModalTimeCancel] = useState(null);
  const [timeCancel, setTimeCancel] = useState(null);
  const handleChangeCancelTime = useCallback((name, value) => {
    setTimeCancel({ [name]: value });
  }, []);

  const onCancel = data => {
    setModalTimeCancel(data);
    setDetailModal(null);
  };

  const onConfirmCancel = () => {
    setModalTimeCancel(null);
    if (!timeCancel) {
      return;
    }
    dispatch(
      updateCalendarWorkHandle({
        params: {
          id: modalTimeCancel.id,
          state: 'CANCEL',
          time: moment(timeCancel.timeCancel).format('HH:mm:ss')
        },
        callback: () => {
          dispatch(
            showCompleteModal({
              title: 'Th??nh c??ng',
              icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
              content: 'B???n ???? b??o ngh?? th??nh c??ng',
              buttonTitle: 'X??c nh???n',
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
              title: 'G???i y??u c???u th???t ba???',
              icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
              content: 'B???n ???? b??o ngh?? kh??ng th??nh c??ng. Xin vui l??ng ki???m tra l???i',
              buttonTitle: 'X??c nh???n',
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
              title: 'G???i y??u c???u th???t ba???',
              icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
              content: 'B???n ???? b??o ngh?? kh??ng th??nh c??ng. Xin vui l??ng ki???m tra l???i',
              buttonTitle: 'X??c nh???n',
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
      title: 'Ngh???',
      onClick: onCancel
    },
    {
      id: 'close',
      title: '????ng',
      onClick: closeModal
    }
  ];

  const renderItem = ({ item, index }) => {
    const markedDates = {};
    item.forEach(calendar => {
      const date = moment(calendar.date).format('YYYY-MM-DD');
      markedDates[date] = {
        customStyles: {
          container: {
            backgroundColor: calendar.cancelTime
              ? 'black'
              : calendar.checkOutTime
              ? '#ff9a9a'
              : calendar.checkInTime
              ? 'white'
              : BACKGROUND_COLOR.RedBasic,
            borderWidth: calendar.checkInTime ? 2 : 0,
            borderColor:
              calendar.checkInTime && !calendar.checkOutTime && !calendar.cancelTime
                ? BACKGROUND_COLOR.RedBasic
                : 'transparent'
          },
          text: {
            color:
              calendar.checkInTime && !calendar.checkOutTime && !calendar.cancelTime
                ? BACKGROUND_COLOR.RedBasic
                : 'white',
            fontWeight: 'bold'
          }
        }
      };
    }, []);
    return (
      <View style={styles.wrapper} key={item?.id || index}>
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
    const date = moment(data?.date).format('DD-MM-YYYY');
    const employerChecking = data?.checkInTime
      ? moment(data?.checkInTime).format('DD-MM-YYYY HH:mm:ss')
      : 'Ch??a check in';
    const employerCheckout = data?.checkOutTime
      ? moment(data?.checkInTime).format('DD-MM-YYYY HH:mm:ss')
      : 'Ch??a check out';
    const employerCancel = data?.cancelTime
      ? moment(data?.checkInTime).format('DD-MM-YYYY HH:mm:ss')
      : 'none';
    const userChecking = data?.userCheckinTime
      ? moment(data?.userCheckinTime).format('DD-MM-YYYY HH:mm:ss')
      : 'Ch??a check in';
    const userCheckout = data?.userCheckoutTime
      ? moment(data?.userCheckoutTime).format('DD-MM-YYYY HH:mm:ss')
      : 'Ch??a check out';
    const userCancel = data?.userCancelTime
      ? moment(data?.userCancelTime).format('DD-MM-YYYY HH:mm:ss')
      : 'none';
    const mappedData = [
      {
        id: 'timeWork',
        title: 'Gi??? l??m vi???c',
        value: `${data?.timeFrom} - ${data?.timeTo}`
      },
      {
        id: 'dayWork',
        title: 'Ng??y l??m vi???c',
        value: date
      },
      {
        id: 'employerChecking',
        title: 'Ng?????i tuy???n d???ng check in',
        value: employerChecking
      },
      {
        id: 'employerCheckout',
        title: 'Ng?????i tuy???n d???ng check out',
        value: employerCheckout
      },
      {
        id: 'employerCancel',
        title: 'Ng?????i tuy???n d???ng hu???',
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
        title: 'Ngh???',
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
    if (userChecking !== 'Ch??a check in') {
      buttonData = buttonData.filter(button => button.id !== 'userChecking');
    }
    if (userCheckout !== 'Ch??a check out') {
      buttonData = buttonData.filter(button => button.id !== 'userCheckout');
    }
    if (userCancel !== 'none') {
      buttonData = buttonData.filter(
        button =>
          button.id !== 'userCancel' && button.id !== 'userCheckout' && button.id !== 'userChecking'
      );
    }

    const listButton = buttonData.map(button => {
      let styleCustomWrapper;
      let styleCustomText;
      switch (button.id) {
        case 'userChecking':
          styleCustomWrapper = {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: BACKGROUND_COLOR.RedBasic
          };
          styleCustomText = {
            color: BACKGROUND_COLOR.RedBasic
          };
          break;
        case 'userCheckout':
          styleCustomWrapper = {
            backgroundColor: '#ff9a9a'
          };
          break;
        case 'userCancel':
          styleCustomWrapper = {
            backgroundColor: 'black'
          };
          break;
        case 'close':
          break;
      }
      return (
        <TouchableOpacity
          style={[
            styles.buttonDetail,
            styleCustomWrapper,
            { width: `${100 / buttonData?.length - 1}%` }
          ]}
          onPress={() => button?.onClick?.(data)}
          key={button.id}>
          <Text style={[styles.buttonTitle, styleCustomText]}>{button.title}</Text>
        </TouchableOpacity>
      );
    });
    return (
      <View style={styles.contentDetail}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Chi ti???t c??ng vi???c</Text>
          <TouchableOpacity onPress={closeModal}>
            <Icon name="closecircle" fontName="AntDesign" size={25} color={CUSTOM_COLOR.RedBasic} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.modalDetailJobName}>{data?.job?.title}</Text>
          {listValue}
          <View style={styles.buttonArea}>{listButton}</View>
        </ScrollView>
      </View>
    );
  };

  const renderListEmptyComponent = () => {
    return (
      <View style={styles.imageFindJob}>
        <Image source={find} style={styles.image} resizeMode="contain" />
        <Text>Kh??ng t??m th???y c??ng vi???c</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendar}>
        <FlatList
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          data={list || []}
          ListEmptyComponent={renderListEmptyComponent()}
        />
      </View>
      <Modal
        visible={detailModal !== null && detailModal !== showModalTimeCheckIn}
        style={styles.modal}
        animationType="fade"
        transparent={true}
        closeModal={closeModal}>
        <View style={styles.wrapperModal}>
          <View style={styles.closeModal} onStartShouldSetResponder={closeModal} />
          {renderModalDetail(detailModal)}
        </View>
      </Modal>
      <ModalSelectTime
        isDisplay={modalTimeCheckIn !== null}
        onChange={handleChangeCheckInTime}
        onCancelChange={() => {
          setModalTimeCheckIn(null);
        }}
        onSubmitChange={onConfirmCheckIn}
        name={'timeCheckIn'}
        date={timeCheckIn ? new Date(timeCheckIn.timeCheckIn) : new Date()}
      />
      <ModalSelectTime
        isDisplay={modalTimeCheckOut !== null}
        onChange={handleChangeCheckOutTime}
        onCancelChange={() => {
          setModalTimeCheckOut(null);
        }}
        onSubmitChange={onConfirmCheckOut}
        name={'timeCheckOut'}
        date={timeCheckOut ? new Date(timeCheckOut.timeCheckOut) : new Date()}
      />
      <ModalSelectTime
        isDisplay={modalTimeCancel !== null}
        onChange={handleChangeCancelTime}
        onCancelChange={() => {
          setModalTimeCancel(null);
        }}
        onSubmitChange={onConfirmCancel}
        name={'timeCancel'}
        date={timeCancel ? new Date(timeCancel.timeCancel) : new Date()}
      />
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
    maxHeight: '70%',
    minHeight: '50%',
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
    paddingHorizontal: 4,
    paddingVertical: SPACING.XNormal,
    borderRadius: 10
  },
  buttonTitle: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: 12,
    color: TEXT_COLOR.White
  },
  imageFindJob: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '50%'
  }
});

export default memo(WorkCalendar);
