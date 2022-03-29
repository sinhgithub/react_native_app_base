import React, { useMemo } from 'react';
import DistributorRegister from './DistributorRegister';
import SaleRigister from './SaleRegister';
import CustomerRegister from './CustomerRegister';

const RegisterScreen = props => {
  const { registerType = 'vip' } = props?.route?.params || {};

  const registerScreenType = useMemo(() => {
    switch (registerType) {
      case 'vip':
        return <CustomerRegister />;
      case 'distributor':
        return <DistributorRegister />;
      default:
        return <SaleRigister />;
    }
  }, [registerType]);

  return registerScreenType;
};

export default RegisterScreen;
