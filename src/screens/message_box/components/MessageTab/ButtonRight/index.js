import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import AppText from 'components/AppText';

const ButtonRight = props => {
  const { deleteConversation, conversationId, isGroup, index, rowMap } = props;
  return (
    <TouchableOpacity
      style={styles.buttonRight}
      onPress={() => {
        deleteConversation(conversationId, isGroup);
        rowMap[index].closeRow();
      }}>
      <AppText style={styles.buttonRightText} translate>
        Xoá
      </AppText>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonRight);
