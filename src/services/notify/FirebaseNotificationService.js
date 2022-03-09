import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
class FirebaseNotificationService {
  register = async onRegister => {
    if (Platform.OS == 'ios') {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
    await this.checkPermission(onRegister);
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
            onRegister(token);
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
            onRegister(fcmToken);
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
  /*createNotificationListeners = (onRegister, onNotification) => {
    this.messageListener = messaging().onMessage(async remoteMessage => {
      console.log('messageListener', remoteMessage);
      if (remoteMessage) {
        const { messageId } = remoteMessage;
        if (remoteMessage?.data?.data) {
          const payload = JSON.parse(remoteMessage?.data?.data);
          console.log('onNotification77', payload);
          const body = {
            title: payload?.convName,
            message: payload?.message?.content,
            data: {
              convId: payload?.convId,
              messageId: payload?.msgId
            }
          };
          console.log('onNotification88', body);
          onNotification(body);
        }
      }
    });
  };*/
}
export const firebaseNotificationService = new FirebaseNotificationService();
