import { AUTH } from 'actionsType';

const initialState = {
  loading: false,
  memberInfo: {
    avatar: '',
    email: '',
    id: NaN,
    name: '',
    phone: '',
    refreshToken: '',
    roles: '',
    token: '',
    type: ''
  },
  isLogin: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case AUTH.LOGIN.SUCCESS: {
      return {
        ...state,
        loading: false,
        memberInfo: { ...action.payload },
        isLogin: true
      };
    }
    case AUTH.LOGIN.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default auth;
