import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
class FirebaseNotificationService {
  messagingListener = () => {};
  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister);
    this.createNotificationListeners(onRegister, onNotification, onOpenNotification);
  };

  registerAppWithFCM = async () => {
    if (Platform.OS === 'ios') {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
  };

  checkPermission = async onRegister => {
    const authorizationStatus = await messaging().requestPermission();
    console.log('checkPermission', authorizationStatus);
    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      console.log('User has notification permissions enabled.');
      this.getToken(onRegister);
    } else if (authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL) {
      console.log('User has provisional notification permissions.');
      this.requestPermission();
    } else {
      console.log('User has notification permissions disabled');
      this.requestPermission();
    }
  };

  getToken = onRegister => {
    if (Platform.OS === 'ios') {
      messaging()
        .getAPNSToken()
        .then(token => {
          console.log('getAPNSToken', token);
          if (token) {
            onRegister?.(token);
          } else {
            console.log('cannot get token');
          }
        })
        .catch(err => {
          console.log('get token error', err);
        });
    } else {
      messaging()
        .getToken()
        .then(fcmToken => {
          console.log('getToken99', fcmToken);
          if (fcmToken) {
            onRegister?.(fcmToken);
          } else {
            console.log('cannot get token');
          }
        })
        .catch(err => {
          console.log('get token error', err);
        });
    }
  };

  requestPermission = onRegister => {
    messaging()
      .requestPermission()
      .then(() => {
        console.log('requestPermission99');
        this.getToken(onRegister);
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteToken = () => {
    console.log('FCM services', 'delete token');
    messaging.deleteToken().catch(error => {
      console.log('FCM services delete token error', error);
    });
  };

  createNotificationListeners = (onRegister, onNotification, onOpenNotification) => {
    // when the app running in background
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('onNotificationOpenedApp ===== onNotificationOpenedApp', remoteMessage);
      if (remoteMessage) {
        const notification = remoteMessage.notification;
        // onOpenNotification?.(notification);
      }
    });

    // when the app iss open from a qui state
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('getInitialNotification ==== getInitialNotification', remoteMessage);
          let notification = null;
          if (Platform.OS === 'ios') {
            notification = remoteMessage.data.notification;
          } else {
            notification = remoteMessage.notification;
          }
          onOpenNotification?.(notification);
        }
      })
      .catch(err => {
        console.log('getInitialNotification errr', err);
      });

    // foreground state messsage
    this.messagingListener = messaging().onMessage(async remoteMessage => {
      console.log('messagingListener ===== messagingListener', remoteMessage);
      if (remoteMessage) {
        let notification = null;
        if (Platform.OS === 'ios') {
          notification = remoteMessage.data.notification;
        } else {
          notification = remoteMessage.notification;
        }
        onNotification?.(notification);
      }
    });

    // trigger when have new token
    messaging().onTokenRefresh(token => {
      console.log(token, '======= token Refresh =======');
      onRegister(token);
    });
  };

  unRegister = () => {
    this.messagingListener?.();
  };
}
export const firebaseNotificationService = new FirebaseNotificationService();
