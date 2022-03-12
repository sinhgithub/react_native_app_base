import React, { memo, useCallback, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { translate } from 'src/i18n';
import { ToggleBottomContent } from 'components/';
import ContactItem from './JobContactItem';
import { SPACING } from 'constants/size';
import { Icon } from 'components/';

const JobContact = props => {
  const { data } = props;
  const [isShowContent, setIsShowContent] = useState(true);

  const handleToggleContent = useCallback(key => {
    if (key === 'down') {
      setIsShowContent(true);
    } else {
      setIsShowContent(false);
    }
  }, []);

  return (
    <View style={styles.jobContact}>
      <ToggleBottomContent
        icon={<Icon color={'gray'} name="contacts" size={30} fontName="AntDesign" />}
        title={translate('common.contact')}
        onToggle={handleToggleContent}
      />
      <View style={styles.jobContactContent}>
        {isShowContent ? <ContactItem data={data} /> : null}
      </View>
    </View>
  );
};

export default memo(JobContact);
