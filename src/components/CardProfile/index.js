import React, { memo, useState, useMemo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { formatNumber } from 'helpers/formatNumber';
import moment from 'moment';

const CardWallet = props => {
  const { data, hideBorder, isLastItem, from } = props;
  const [sizeCardJobContentImage, setSizeCardJobContentImage] = useState(null);

  const dataProcessed = useMemo(() => {
    switch (from) {
      case 'overview':
        return {
          line1: data?.id?.employer?.companyName,
          line2: `${formatNumber(data?.total, ',')} VND`,
          line3: (
            <Text>
              Đã tham gia <Text>{data?.totalJob}</Text> công việc
            </Text>
          ),
          line4: (
            <Text>
              <Text>{data?.totalShift}</Text> ca hoàn thành
            </Text>
          ),
          jobBanner: data?.id?.employer?.banner
        };
      case 'history':
        return {
          line1: `Người gửi: ${data?.employer?.companyName}`,
          line2: `Số tiền: ${formatNumber(data?.deposits, ',')} VND`,
          line3: `Nội dung: ${data?.job?.title}`,
          line4: `Thời gian: ${
            data?.createdAt ? moment(data?.createdAt)?.format('DD/MM/YYYY HH:mm') : ''
          }`,
          jobBanner: data?.employer?.banner
        };
      case 'withDraw':
        return {
          line1: `Gửi tới: ${data?.employer?.companyName}`,
          line2: `Số tiền: ${formatNumber(data?.withdrawals, ',')} VND`,
          line3: `Trạng thái: ${data?.state}`,
          line4: `Thời gian: ${
            data?.createdAt ? moment(data?.createdAt)?.format('DD/MM/YYYY HH:mm') : ''
          }`,
          jobBanner: data?.employer?.banner
        };
      default:
        return {
          line1: data?.id?.employer?.companyName,
          line2: data?.total,
          line3: data?.totalJob,
          line4: data?.totalShift,
          jobBanner: data?.id?.employer?.banner
        };
    }
  }, [data, from]);

  return (
    <View style={styles.cardJob}>
      <View
        style={[styles.cardJobContent, (hideBorder || isLastItem) && { borderBottomWidth: 0 }]}
        activeOpacity={0.6}>
        <View
          style={[styles.cardJobContentImage, { height: sizeCardJobContentImage?.width || 'auto' }]}
          onLayout={e => {
            if (e) {
              setSizeCardJobContentImage(e.nativeEvent.layout);
            }
          }}>
          {!dataProcessed?.jobBanner && (
            <Text style={styles.cardJobContentImageTextDesc}>Banner</Text>
          )}
          {sizeCardJobContentImage && dataProcessed?.jobBanner && (
            <FastImage
              style={[
                styles.image,
                {
                  width: sizeCardJobContentImage?.width,
                  height: sizeCardJobContentImage?.width
                }
              ]}
              source={{
                uri: dataProcessed?.jobBanner
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          )}
        </View>
        <View style={styles.cardJobContentInfo}>
          <Text style={styles.cardJobContentInfoName} numberOfLines={2}>
            {dataProcessed?.line1}
          </Text>
          <Text style={styles.cardJobContentInfoIncome} numberOfLines={1}>
            {dataProcessed?.line2}
          </Text>
          <Text style={styles.cardJobContentInfoAddress} numberOfLines={2}>
            {dataProcessed?.line3}
          </Text>
          <Text style={styles.cardJobContentInfoAddress} numberOfLines={2}>
            {dataProcessed?.line4}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(CardWallet);
