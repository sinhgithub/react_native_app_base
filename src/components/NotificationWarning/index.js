import React, { memo } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { AppText } from 'src/components';

const NotificationWarning = ({ contentText, titleAction, icon, notifyListUnread }) => {
  if (notifyListUnread?.length <= 0) {
    return null;
  }
  return (
    <View style={styles.NotificationWarning}>
      <View style={styles.NotificationWarningContent}>
        {icon}
        {contentText && (
          <AppText translate style={styles.NotificationWarningContentText}>
            {contentText}
          </AppText>
        )}
      </View>
      <View style={styles.NotificationWarningAction}>
        {titleAction && (
          <AppText translate style={styles.NotificationWarningActionText}>
            {titleAction}
          </AppText>
        )}
      </View>
    </View>
  );
};

export default memo(NotificationWarning);
