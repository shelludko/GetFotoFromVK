/* eslint-disable no-undef */
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from '../constants/constants';

const handleLogin = () => {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST,
        });
        //eslint-disable-next-line no-undef
        VK.Auth.login((request) => {
            if (request.session) {
                let username = request.session.user.first_name;
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: username,
                });
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации'),
                });
            }
        }, 4);
    };
}

export default handleLogin;
