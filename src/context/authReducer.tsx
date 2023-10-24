import { AuthState } from './AuthContext';

type AuthAction =
    | { type: 'signIn'}
    | { type: 'logOut'}
    | { type: 'changeFavIcon',payload:string}
    | { type: 'changeUsername',payload:string}


export const authReducer = (state:AuthState, action: AuthAction):AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggeIn: true,
                username: 'User nameless',
            };
        case 'logOut':
            return {
                ...state,
                isLoggeIn: false,
                username: undefined,
                favoriteIcon: undefined,
            };
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        case 'changeUsername':
            return {
                ...state,
                username: action.payload,
            };
        default:
            return state;
    }
};
