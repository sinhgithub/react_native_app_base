import React from 'react';
import { TouchableOpacity } from 'react-native';
import { scale } from 'utils/responsive';
import styles from './styles';
// import { ICTrash } from 'assets/icons';
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
      {/* <ICTrash width={scale(16)} height={scale(16)} /> */}
      <AppText style={styles.buttonRightText} translate>
        Xoá
      </AppText>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonRight);
