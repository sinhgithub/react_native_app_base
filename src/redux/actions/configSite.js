import { CONFIG_SITE } from 'actionsType';

export const getConfigSiteHandle = payload => ({
  type: CONFIG_SITE.GET_CONFIG_SITE.HANDLER,
  payload
});

export const getConfigSiteSuccess = payload => ({
  type: CONFIG_SITE.GET_CONFIG_SITE.SUCCESS,
  payload
});

export const getConfigSiteFailure = payload => ({
  type: CONFIG_SITE.GET_CONFIG_SITE.FAILURE,
  payload
});
