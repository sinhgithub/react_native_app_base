import React, { memo, useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { Button } from 'src/components';
import { translate } from 'src/i18n';
import { mapDistrictsAndProvince } from 'helpers/mapAddress';
import { mapWageFromTo } from 'helpers/wage';
import { formatFeatureDurationDate } from 'helpers/formatTime';
import { getImageFromHost } from 'configs/appConfigs';
import { default_avatar } from 'assets/images';

const CardJob = props => {
  const { onPress, data, hideAllFlag, hideBorder, isLastItem, hideLogo } = props;
  const [sizeCardJobContentImage, setSizeCardJobContentImage] = useState(null);

  const dataCardJob = useMemo(() => {
    const address = `${data?.address}, ${mapDistrictsAndProvince(data?.district, data?.province)}`;
    const wage = mapWageFromTo(data?.wageFrom, data?.wageTo);
    const timeRemaining = formatFeatureDurationDate(data?.expirationDate);
    return {
      id: data?.id,
      title: data?.title,
      address,
      wage,
      timeRemaining: timeRemaining
        ? `${translate('common.remind')} ${timeRemaining}`
        : translate('common.expire'),
      isBonus: data?.bonus?.length > 0,
      isPaidAfterWork: data?.paidAfterWork,
      jobBanner: getImageFromHost(data?.employer?.logo),
      luongthoathuan: data?.luongthoathuan,
      note: data?.note,
      ctv_name: data?.ctv_name
    };
  }, [data]);

  return (
    <View style={styles.cardJob}>
      <TouchableOpacity
        style={[styles.cardJobContent, (hideBorder || isLastItem) && { borderBottomWidth: 0 }]}
        onPress={() =>
          onPress?.({
            ...data,
            addressMapped: dataCardJob?.address,
            wageMapped: dataCardJob?.wage,
            timeRemainingMapped: dataCardJob?.timeRemaining,
            isPaidAfterWorkMapped: dataCardJob?.isPaidAfterWork,
            isBonusMapped: dataCardJob?.isBonus,
            jobBanner: dataCardJob.jobBanner
          })
        }
        activeOpacity={0.6}>
        {!hideLogo && (
          <View
            style={[
              styles.cardJobContentImage,
              { height: sizeCardJobContentImage?.width || 'auto' }
            ]}
            onLayout={e => {
              if (e) {
                setSizeCardJobContentImage(e.nativeEvent.layout);
              }
            }}>
            {sizeCardJobContentImage && dataCardJob?.jobBanner ? (
              <FastImage
                style={[
                  styles.image,
                  {
                    width: sizeCardJobContentImage?.width,
                    height: sizeCardJobContentImage?.width
                  }
                ]}
                source={{
                  uri: dataCardJob?.jobBanner
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            ) : (
              <View style={styles.jobInfoInfoImageText}>
                <Image
                  style={[
                    styles.image,
                    {
                      width: sizeCardJobContentImage?.width,
                      height: sizeCardJobContentImage?.width
                    }
                  ]}
                  source={default_avatar}
                />
              </View>
            )}
          </View>
        )}

        <View style={styles.cardJobContentInfo}>
          <Text style={styles.cardJobContentInfoName} numberOfLines={2}>
            {dataCardJob?.title}
          </Text>
          <Text style={styles.cardJobContentInfoIncome} numberOfLines={1}>
            {dataCardJob?.luongthoathuan ? 'L????ng tho??? thu???n' : dataCardJob?.wage}
          </Text>
          <Text style={styles.cardJobContentInfoAddress} numberOfLines={2}>
            {dataCardJob?.address}
          </Text>
          {!hideAllFlag && (
            <View style={styles.buttonsWrapper}>
              <Button
                type="card"
                title={dataCardJob?.timeRemaining}
                containerStyle={styles.buttonContainerStyle}
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.titleButtonStyle}
              />
              {dataCardJob.isBonus && (
                <Button
                  type="card"
                  title={translate('common.have_bonus')}
                  containerStyle={[styles.buttonContainerStyle, styles.ml4]}
                  buttonStyle={styles.buttonBonusStyle}
                  titleStyle={styles.titleButtonBonusStyle}
                />
              )}
              {dataCardJob.isPaidAfterWork && (
                <Button
                  type="card"
                  title={translate('common.wage_after_work')}
                  containerStyle={[styles.buttonContainerStyle, styles.ml4]}
                  buttonStyle={styles.buttonPaidAfterWorkStyle}
                  titleStyle={styles.titleButtonPaidAfterWorkStyle}
                />
              )}
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(CardJob);
