import { formatDateChat } from 'helpers/formatTime';
import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import { default_avatar } from 'assets/images';
import { getImageFromHost } from 'src/configs/appConfigs';

const Conversation = props => {
  const { data } = props;
  const detail = data?.item;
  console.log({ data, detail }, 'data,detail');
  return (
    <View style={styles.conversation}>
      <View style={styles.rowDetail}>
        <View style={styles.conversationAvatar}>
          {detail?.avatar ? (
            <FastImage
              source={{
                uri: getImageFromHost(detail?.avatar)
              }}
              style={styles.avatar}
              resizeMode="cover"
            />
          ) : (
            <Image style={styles.avatar} source={default_avatar} resizeMode="cover" />
          )}
        </View>
        <View style={styles.conversationContent}>
          <Text style={styles.name}>{detail?.name || ''}</Text>
          <Text style={styles.desc} numberOfLines={2}>
            {detail?.latestMessage?.message || ''}
          </Text>
        </View>
      </View>
      <View style={styles.timeArea}>
        <Text style={styles.timeText}>{formatDateChat(detail.createAt)}</Text>
      </View>
    </View>
  );
};

export default memo(Conversation);
