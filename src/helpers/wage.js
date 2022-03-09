import { formatNumber } from './formatNumber';

export const mapWageFromTo = (wageFrom = 0, wageTo = 0, unit = 'đ/ Ca') => {
  return `${formatNumber(wageFrom, '.')} - ${formatNumber(wageTo, '.')} ${unit}`;
};
