export const mapDistrictsAndProvince = (district = {}, province = {}) => {
  if (district?.provinceId === province?.id) {
    return `${district.name}, ${province.name}`;
  }
  return '';
};
