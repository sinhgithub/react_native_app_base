import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import AppText from 'components/AppText';

const ButtonLeft = props => {
  const { markConversationAsRead, conversationId, index, rowMap } = props;
  return (
    <TouchableOpacity
      style={styles.buttonLeft}
      onPress={() => {
        markConversationAsRead(conversationId);
        rowMap[index].closeRow();
      }}>
      <AppText style={styles.buttonLeftText} translate>
        Đã đọc
      </AppText>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonLeft);
