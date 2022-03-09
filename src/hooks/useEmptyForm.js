import { isEmpty } from 'lodash';
import { ATTRIBUTE_TYPE } from 'src/global/entity_type';

const { useMemo } = require('react');

export function useEmptyForm(data) {
  const verifyFillAll = useMemo(() => {
    if (!Array.isArray(data) || isEmpty(data)) {
      // console.log('================================');
      return true;
    }

    const tempIsFillAll = data?.every(component =>
      !isEmpty(component?.eavAttribute)
        ? component?.eavAttribute?.every(
            item =>
              !item?.error &&
              (item?.isRequired
                ? !!item?.value ||
                  item?.mediaUploadValue?.length > 0 ||
                  (item.type === ATTRIBUTE_TYPE.address &&
                    (item?.addressData?.isChecked ||
                      item?.addressData?.addressDetail?.every(
                        addr => !!addr.value && !addr?.error
                      )))
                : true)
          )
        : !isEmpty(component?.listComponent)
        ? component?.listComponent?.every(
            item =>
              !item?.error &&
              (item?.isRequired
                ? !!item?.value ||
                  item?.mediaUploadValue?.length > 0 ||
                  (item.type === ATTRIBUTE_TYPE.address &&
                    (item?.addressData?.isChecked ||
                      item?.addressData?.addressDetail?.every(
                        addr => !!addr.value && !addr?.error
                      )))
                : true)
          )
        : !isEmpty(component?.listAttribute)
        ? component?.listAttribute?.every(
            item =>
              !item?.error &&
              (item?.isRequired
                ? !!item?.value ||
                  item?.mediaUploadValue?.length > 0 ||
                  (item.type === ATTRIBUTE_TYPE.address &&
                    (item?.addressData?.isChecked ||
                      item?.addressData?.addressDetail?.every(
                        addr => !!addr.value && !addr?.error
                      )))
                : true)
          )
        : false
    );
    return tempIsFillAll;
  }, [data]);
  return verifyFillAll;
}
