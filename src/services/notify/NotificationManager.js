import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

class NotificationManager {
  configure = onOpenNotification => {
    PushNotification.createChannel(
      {
        channelId: 'channelIdApp', // (required)
        channelName: 'My channel', // (required)
        //channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onAction: () => {
        console.log('onAction90');
      },
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log('onNotification900:', notification);

        if (!notification.userInteraction) {
          // if not user clicked
          //onMessageReceived(notification);
          return;
        }

        if (notification?.data?.convId && Platform.OS == 'android') {
          // notification chat for stringee
          console.log('onOpenNotification', onOpenNotification);
          onOpenNotification(notification?.data);
        }
        if (Platform.OS == 'ios' && notification?.data?.data?.map?.type === 'CHAT_EVENT') {
          // notification chat for stringee
          const { convId, convName, isGroup } = notification?.data?.data?.map?.data?.map;
          //convId, isGroup, convName
          console.log('convId, convName, isGroup', convId, convName, isGroup);
          onOpenNotification({ convId, convName, isGroup: isGroup != 0 });
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
      },
      // IOS only: permission
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true
    });
  };
  _buildAndroidNotification = (id, title, message, data) => {
    return {
      channelId: 'channelIdApp',
      id: id,
      autoCancel: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_launcher',
      largeIconUrl: data?.avatar,
      //subText: message || '',
      vibrate: false,
      vibration: 300,
      priority: 'high',
      importance: 'high',
      data: data
    };
  };
  showNotification = (id, title, message, data) => {
    console.log('showNotification');
    console.log('title: ', title);
    console.log('message: ', message);
    console.log('data: ', data);
    PushNotification.localNotification({
      /*--Android---*/
      ...this._buildAndroidNotification(id, title, message, data),
      data: data,
      title: title || '',
      message: message || '',
      playSound: true,
      soundName: 'default',
      userInteraction: true
    });
  };
}
export const notificationManager = new NotificationManager();
