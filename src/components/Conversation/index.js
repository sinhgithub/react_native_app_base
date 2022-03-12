import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Conversation = props => {
  return (
    <View style={styles.conversation}>
      <View style={styles.conversationAvatar}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg'
          }}
        />
      </View>
      <View style={styles.conversationContent}>
        <Text style={styles.name}>TTV Tuyen dung</Text>
        <Text style={styles.desc}>Chua co gi...</Text>
      </View>
    </View>
  );
};

export default memo(Conversation);
