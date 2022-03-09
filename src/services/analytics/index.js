import FirebaseAnalyticsService from './FirebaseAnalyticsService';
import AppsFlyerService from './AppsFlyerService';

class AnalyticsService {
  constructor() {
    this.analyticsInstance = FirebaseAnalyticsService.getInstance();
    this.appsFlyerInstance = AppsFlyerService.getInstance();
  }
  logEvent = (key, params) => {
    this.appsFlyerInstance.logEvent(key, params);
    this.analyticsInstance.logEvent(key, params);
  };
  logRevenue = (key, value) => {
    this.appsFlyerInstance.logRevenue(key, value);
  };
  logAction = params => {
    this.analyticsInstance.logAction(params);
  };
}
export const analyticsService = new AnalyticsService();
