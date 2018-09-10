import * as fromActions from '../actions';

export interface State {
    login: string;
    isLoggedIn: boolean;
}

const initialState: State = {
    login: '',
    isLoggedIn: false,
};

export function reducer(
    state: State = initialState,
    action: fromActions.AuthActionsUnion
): State {
    switch (action.type) {
        case fromActions.AuthActionTypes.SignIn:
            return {
                ...state,
                login: action.payload.login,
                isLoggedIn: true
            };
        case fromActions.AuthActionTypes.SignIn: {
            return {
                ...initialState,
            };
        }
        default:
            return state;
    }
}

export const getLogin = (state: State) => state.login;
export const getIsLoggedIn = (state: State) => state.isLoggedIn;
