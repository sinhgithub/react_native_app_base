import { APPS_FLYER } from 'constants/analyticEnums';
import { Platform } from 'react-native';
import appsFlyer from 'react-native-appsflyer';

export default class AppsFlyerService {
  instance = null;

  static getInstance() {
    if (this.instance == null) {
      this.instance = new AppsFlyerService();
    }
    return this.instance;
  }

  init = isDebugMode => {
    const options =
      Platform.OS === 'ios'
        ? APPS_FLYER.APPS_FLYER_IOS_CONFIG({ isDebugMode })
        : APPS_FLYER.APPS_FLYER_CONFIG({ isDebugMode });
    appsFlyer.initSdk(
      options,
      result => {
        console.log('initSdk: ' + result);
        if (Platform.OS === 'android') {
          appsFlyer.setCollectAndroidID(true);
        }
      },
      error => {
        console.log('initSdk: ' + typeof error === 'object' ? JSON.stringify(error) : error);
      }
    );
  };

  setCustomUserId(userId) {
    appsFlyer.setCustomerUserId(userId.toString());
  }

  logEvent = (key, params) => {
    // console.log('key', key);
    // console.log('params', params);
    const eventName = key;
    const eventValues = params;
    appsFlyer.logEvent(
      eventName,
      eventValues,
      result => {
        // console.log('AppsFlyer logEvent: ' + eventName + ' ' + result);
      },
      error => {
        console.log('AppsFlyer logEvent: ' + error);
      }
    );
  };

  logRevenue = (key, value) => {
    const eventName = key;
    const eventValues = {
      af_currency: 'VND',
      af_revenue: value
    };
    appsFlyer.logEvent(
      eventName,
      eventValues,
      result => {
        // console.log('AppsFlyer logRevenue: ' + eventName + ' ' + result);
        // console.log('AppsFlyer eventValues', eventValues);
      },
      error => {
        console.log('AppsFlyer logRevenue: ' + error);
      }
    );
  };

  logInAppPurchase = info => {
    if (Platform.OS === 'android') {
      info = {
        publicKey: 'key',
        currency: 'biz',
        signature: 'sig',
        purchaseData: 'data',
        ...info
      };
    } else if (Platform.OS === 'ios') {
      info = {
        productIdentifier: 'identifier',
        currency: 'VND',
        transactionId: info.transactionId,
        ...info
      };
    }
    appsFlyer.validateAndLogInAppPurchase(
      info,
      res => console.log(res),
      err => console.log(err)
    );
  };

  logLocationPressed = location => {
    appsFlyer.logLocation(location.X, location.Y, result => {
      console.log('logLocation: ' + result);
    });
  };

  stopPressed = () => {
    appsFlyer.stop(
      true,
      res => {
        console.log('stop: ' + res);
      },
      err => {
        console.log('stop: ' + err);
      }
    );
  };

  logCrossPromotion = (campaign, params) => {
    appsFlyer.logCrossPromotionImpression(APPS_FLYER.APP_ID, campaign, params);
  };

  logCrossPromotionAndOpenStore = (campaign, params) => {
    appsFlyer.logCrossPromotionAndOpenStore(APPS_FLYER.APP_ID, campaign, params);
  };

  anonymizeUser = () => {
    appsFlyer.anonymizeUser(true, res => {
      console.log('anonymizeUser: ' + res);
    });
  };

  generateInviteLink = async params => {
    return new Promise((resolve, reject) => {
      appsFlyer.generateInviteLink(
        params,
        link => {
          console.log('link: ', { type: typeof link, link });
          resolve(link);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  };

  onDeepLink = () =>
    appsFlyer.onDeepLink(res => {
      console.log('onDeepLinking: ' + JSON.stringify(res));
      console.log('status: ' + res.status);
      console.log('type: ' + res.type);
    });

  onAppOpenAttribution = () =>
    appsFlyer.onAppOpenAttribution(res => {
      console.log(res);
    });

  onInstallConversionData = () =>
    appsFlyer.onInstallConversionData(res => {
      console.log('onInstallConversionData: ' + JSON.stringify(res));

      if (res.type === APPS_FLYER.CONVERSION_DATA_TYPE.onInstallConversionSuccess) {
        if (JSON.parse(res.data.is_first_launch) === true) {
          if (res.data.af_status === APPS_FLYER.AF_STATUS.NonOrganic) {
            const media_source = res.data.media_source;
            const campaign = res.data.campaign;
            // This is first launch and a Non-Organic install.
            console.log(
              'This is first launch and a Non-Organic install. Media source: ' +
                media_source +
                ' Campaign: ' +
                campaign
            );
          } else if (res.data.af_status === APPS_FLYER.AF_STATUS.Organic) {
            // This is first launch and a Organic Install
            console.log('This is first launch and a Organic Install');
          }
        } else {
          // This is not first launch
          console.log('This is not first launch');
        }
      }
    });
}
