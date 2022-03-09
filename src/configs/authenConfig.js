import Config from 'react-native-config';

export const config = {
  issuer: Config.AUTH_ISSUER,
  clientId: Config.AUTH_CLIENT_ID,
  clientSecret: Config.AUTH_CLIENT_SERECT,
  redirectUrl: Config.AUTH_REDIRECT_URL,
  scopes: ['openid']
};

export const prefetchConfig = {
  warmAndPrefetchChrome: true,
  issuer: Config.AUTH_ISSUER,
  clientId: Config.AUTH_CLIENT_ID,
  clientSecret: Config.AUTH_CLIENT_SERECT,
  redirectUrl: Config.AUTH_REDIRECT_URL,
  scopes: ['openid']
};
