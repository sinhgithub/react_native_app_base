import React, { memo } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { AppText } from 'src/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NotificationWarning = ({ contentText, titleAction, icon, onPress }) => {
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
      <TouchableOpacity style={styles.NotificationWarningAction} onPress={onPress}>
        {titleAction && (
          <AppText translate style={styles.NotificationWarningActionText}>
            {titleAction}
          </AppText>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(NotificationWarning);
