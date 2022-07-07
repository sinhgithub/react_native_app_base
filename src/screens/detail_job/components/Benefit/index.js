import React, { memo, useCallback, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { translate } from 'src/i18n';
import { ToggleBottomContent } from 'components/';
import BenefitItem from './BenefitItem';
import { ICBenifit } from 'assets/icons';
import { SPACING } from 'constants/size';
import { formatNumber } from 'helpers/formatNumber';
import Icon from 'components/Icon';

const Benefit = props => {
  const { data, onPress, title, isBonus } = props;
  const [isShowContent, setIsShowContent] = useState(true);

  const handleToggleContent = useCallback(key => {
    if (key === 'down') {
      setIsShowContent(true);
    } else {
      setIsShowContent(false);
    }
  }, []);

  const listBonus = data?.map((item, index) => {
    return (
      <BenefitItem
        isBonus={isBonus}
        containerStyle={{
          marginTop: index === 0 ? 0 : SPACING.Normal,
          paddingBottom: index === data.length - 1 ? SPACING.XXNormal : 0
        }}
        key={index}
        bonusName={item?.title || item}
        bonusDesc={`${translate('common.can_up_to')} ${formatNumber(
          item?.bonusFrom || item,
          '.'
        )}đ - ${formatNumber(item?.bonusTo || item, '.')}đ`}
        data={item}
        onPress={onPress}
      />
    );
  });

  return (
    <View style={styles.benefit}>
      <ToggleBottomContent
        icon={
          isBonus ? (
            <ICBenifit color="gray" />
          ) : (
            <Icon fontName="AntDesign" name="star" size={25} color="gray" />
          )
        }
        title={title}
        onToggle={handleToggleContent}
      />
      <View style={styles.benefitContent}>
        {isShowContent && data?.length > 0 ? listBonus : null}
      </View>
    </View>
  );
};

export default memo(Benefit);
