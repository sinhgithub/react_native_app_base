import { removeAscent } from './removeAscent';
import moment from 'moment';
import { ATTRIBUTE_TYPE, DATE_FORMAT } from '../global/entity_type';
export const validateEmail = email => {
  if (email === undefined || email === null || email.trim() === '') {
    return false;
  }
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const validatePhone = phoneNumber => {
  if (phoneNumber === undefined || phoneNumber == null || phoneNumber === '') {
    return true;
  }
  // var vnf_regex = /^0?((3|5|7|8|9)[0-9]{8}|(2[0-9]{2})[0-9]{7})$/;
  var vnf_regex = /^0[0-9]{9}$/;
  return vnf_regex.test(phoneNumber);
};

export const validateName = name => {
  if (name === undefined || name == null || name === '') {
    return true;
  }
  let letters = /^[A-Za-z ]+$/;
  return letters.test(removeAscent(name));
};

export const validateNameNoAscent = name => {
  if (name === undefined || name == null || name === '') {
    return true;
  }
  let letters = /^[A-Za-z ]+$/;
  return letters.test(name);
};

export const validateAlphaNumberic = str => {
  if (str === undefined || str == null || str === '') {
    return true;
  }
  let letters = /^[A-Za-z0-9]+$/;
  return letters.test(str);
};

export const validateNumberic = str => {
  if (str === undefined || str == null || str === '') {
    return true;
  }
  let letters = /^[0-9]+$/;
  return letters.test(str);
};

export const validateSpecialCharacter = str => {
  if (str === undefined || str == null || str === '') {
    return true;
  }
  let regex = /^[A-Za-z0-9]+$/;
  return regex.test(str);
};

export const validateAlphabet = str => {
  if (str === undefined || str == null || str === '') {
    return true;
  }
  let regex = /^[A-Za-z]+$/;
  return regex.test(str);
};

export const validateDate = date => {
  if (date === undefined || date == null || date === '') {
    return true;
  }
  return moment(date, moment.ISO_8601, true).isValid();
};
