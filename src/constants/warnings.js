import { ICCancel, ICSendConfirm, ICSupportRequire, ICTick, ICWarningInfo } from 'assets/icons';
import React from 'react';
import { help_box } from 'assets/images';

export const ACCOUNT_ALREADY_EXISTS = {
  image: <ICSupportRequire />,
  title: 'warning_msg.active_account',
  message: 'warning_msg.active_account_message',
  type: 'complete'
};

export const NO_HAVE_REFERRAL = {
  image: <ICSupportRequire />,
  title: 'warning_msg.notification',
  message: 'auth.no_have_referral',
  type: 'complete'
};

export const CLOSE_REQUEST_SUCCESS = {
  image: <ICTick />,
  title: 'common.success',
  message: 'support.close_success',
  type: 'complete'
};

export const CONFIRM_CLOSE_REQUEST = {
  id: 1,
  image: <ICSupportRequire />,
  title: 'errMessage.confirm_close_request_title',
  message: 'errMessage.confirm_close_request_message',
  btnLeft: 'common.cancel',
  btnRight: 'common.confirm',
  nextContent: CLOSE_REQUEST_SUCCESS
};

export const CONFIRM_UPDATE_PROFILE = {
  image: <ICWarningInfo />,
  title: 'create_support.require_name_title',
  message: 'create_support.require_name_message',
  btnLeft: 'common.cancel',
  btnRight: 'common.confirm'
};

export const CANCEL_SCHEDULE_1 = {
  image: <ICCancel />,
  title: 'schedule.confirm_cancel_title',
  message: 'schedule.confirm_cancel_message',
  btnLeft: 'common.cancel',
  btnRight: 'common.confirm'
};

export const CONFIRM_UPDATE_PROFILE_WITHDRAWAL = {
  imageDefault: help_box,
  title: 'account_balance.update_profile_title',
  message: 'account_balance.update_profile_message',
  btnLeft: 'common.later',
  btnRight: 'common.update'
};

export const REFERRAL_NOT_EXITS = {
  image: <ICWarningInfo />,
  title: 'errMessage.no_referal',
  message: '',
  type: 'complete'
};
export const CONFIRM_REVOKE_MESSAGE = {
  title: 'chat.revoke_message',
  message: 'chat.revoke_message_confirm',
  btnLeft: 'chat.no',
  btnRight: 'chat.yes',
  type: 'msgChat',
  noClose: true,
  btnMsgChat: true
};
