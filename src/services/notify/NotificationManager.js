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
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        if (!notification?.data) {
          return;
        }
        notification.userInteraction = true;
        onOpenNotification(Platform.OS === 'ios' ? notification.data.item : notification.data);

        if (Platform.OS === 'ios') {
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        console.error(err.message, err);
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

  showNotification = (id, title, message, data = {}, options = {}) => {
    console.log('showNotification');
    console.log('title: ', title);
    console.log('message: ', message);
    console.log('data: ', data);
    PushNotification.localNotification({
      /*--Android---*/
      ...this.buildAndroidNotification(id, title, message, data, options),
      // ios & android
      ...this.buildIosNotification(id, title, message, data, options),
      data: data,
      title: title || '',
      message: message || '',
      playSound: options.playSound || true,
      soundName: options.soundName || 'default',
      userInteraction: false
    });
  };

  buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      // channelId: 'channelIdApp',
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_notification',
      bigText: message || '',
      subText: title || '',
      largeIconUrl: data?.avatar,
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data
    };
  };
  buildIosNotification = (id, title, message, data = {}, options = {}) => {
    return {
      alertAction: options.alertAction || 'view',
      category: options.alertAction || '',
      userInfo: {
        id,
        data
      }
    };
  };

  cancelAllNotification = () => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  removeDeliveredNotificationByID = notificationId => {
    console.log('removeDeliveredNotificationByID');
    PushNotification.cancelLocalNotification({ id: `${notificationId}` });
  };
}
export const notificationManager = new NotificationManager();
