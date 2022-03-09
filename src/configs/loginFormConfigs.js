import React from 'react';
import { Icon } from 'components/';

export const loginFormConfigs = [
  {
    id: 'user',
    placeholder: 'Nhập số điện thoại',
    icon: <Icon name="user-o" size={20} color="white" fontName="FontAwesome" />
  },
  {
    id: 'password',
    placeholder: 'Nhập mật khẩu',
    icon: <Icon name="lock" size={20} color="white" fontName="Feather" />
  }
];
