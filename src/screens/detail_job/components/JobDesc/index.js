import React, { memo, useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { translate } from 'src/i18n';
import { ToggleBottomContent } from 'components/';

const JobDesc = props => {
  const { data } = props;
  const { recruitedQuantity, desc } = data;
  const [isShowDesc, setIsShowDesc] = useState(true);
  const handleToggleContent = useCallback(key => {
    if (key === 'down') {
      setIsShowDesc(true);
    } else {
      setIsShowDesc(false);
    }
  }, []);

  const descContent = desc?.split('\n')?.map((item, index) => {
    return (
      <Text key={index} style={styles.jobDescContentItem}>
        {item}
      </Text>
    );
  });
  return (
    <View style={styles.jobDesc}>
      <ToggleBottomContent title={translate('common.job_desc')} onToggle={handleToggleContent} />
      {isShowDesc && (
        <View style={styles.jobDescContent}>
          <Text style={styles.jobDescContentItem}>
            - {translate('common.recruited_quantity')} : {`${recruitedQuantity || 0} ứng viên`}
          </Text>
          {descContent && descContent}
        </View>
      )}
    </View>
  );
};

export default memo(JobDesc);
