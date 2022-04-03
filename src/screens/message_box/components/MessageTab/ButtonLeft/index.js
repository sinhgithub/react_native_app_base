import React from 'react';
import { TouchableOpacity } from 'react-native';
// import ICMessageRead from 'assets/icons/ic_message_read';
import { scale } from 'utils/responsive';
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
      {/* <ICMessageRead width={scale(16)} height={scale(16)} /> */}
      <AppText style={styles.buttonLeftText} translate>
        Đã đọc
      </AppText>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonLeft);
