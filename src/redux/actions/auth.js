import {
    SIGNUP_OK,
    SIGNUP_FAIL,
    LOGIN_OK,
    LOGIN_FAIL,
    USER_LOADED_OK,
    USER_LOADED_FAIL,
    ACTIVATION_OK,
    ACTIVATION_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    AUTHENTICATED_OK,
    AUTHENTICATED_FAIL,
    REFRESH_OK,
    REFRESH_FAIL,
    LOGOUT,
    RESET_PASSWORD_OK,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_CONFIRM_OK,
    RESET_PASSWORD_CONFIRM_FAIL
} from "./types";
import { setAlert } from './alert';

import axios from "axios";

const getStorLocal = (item) => {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(item);
    }
    return null;
}


//   /jwt/verify/
export const check_authenticated =()=> async dispatch =>{
    if(getStorLocal('access')){
        const config={
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({
            token: localStorage.getItem('access')
        });

        try {
            
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/jwt/verify/`,body,config);

            if(res.status===200){
                dispatch({
                    type: AUTHENTICATED_OK
                });
            }else{
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }

        } catch(err){
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }

    }
};

// /users/
export const signup=(first_name,last_name,email,password,re_password) => async dispatch =>{
    dispatch({
        type: SET_AUTH_LOADING
    });

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        re_password
    })

    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/users/`,body,config);

        if(res.status===201){
            dispatch({
                type:SIGNUP_OK,
                payload: res.data
            });
            dispatch(setAlert("Te enviamos un correo, por favor activa tu cuenta. Revisa el correo de spam","green"))
        }else{
            dispatch({
                type:SIGNUP_FAIL
            });
            dispatch(setAlert('Error al crear cuenta', 'red'));


        }
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
        
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        });
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
        dispatch(setAlert('Error conectando con el servidor, intenta mas tarde.', 'red'));

    }


}

// /users/me/
export const load_user = () => async dispatch =>{
    if(localStorage.getItem('access')){
        const config={
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const res= await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/users/me/`,config)
            if (res.status===200){
                dispatch({
                    type: USER_LOADED_OK,
                    payload: res.data
                });
            }else{
                dispatch({
                    type: USER_LOADED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
        }

    }else{
        dispatch({
            type:USER_LOADED_FAIL
        });
    }
}

// /jwt/create/
export const login = (email,password) => async dispatch =>{
    dispatch({
        type: SET_AUTH_LOADING
    });

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        email,
        password
    });
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/jwt/create/`,body,config);

        if (res.status === 200){
            console.log("good")

            dispatch({
                type:LOGIN_OK,
                payload: res.data
            });
            try {
            dispatch(load_user());
                
            } catch (error) {
                
            }
            dispatch({
                type: REMOVE_AUTH_LOADING
            });
            dispatch(setAlert('Inicio de sesión con éxito', 'green'));
        }else{
            dispatch({
                type:LOGIN_FAIL
            });
            dispatch({
                type: REMOVE_AUTH_LOADING
            });
            dispatch(setAlert('Error al iniciar sesion.', 'red'));

        }
    
        
    } catch (err) {
        dispatch({
            type:LOGIN_FAIL
        });
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
        dispatch(setAlert('Error al iniciar sesion. Intenta mas tarde', 'red'));
    }
}

// /users/activation/
export const activate = (uid,token) => async dispatch =>{
    dispatch({
        type: SET_AUTH_LOADING
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({
        uid,
        token
    });

    try {
        const res= await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/users/activation/`,body,config);

        if(res.status === 204){
            dispatch({
                type:ACTIVATION_OK
            });
        }else{
            dispatch({
                type:ACTIVATION_FAIL
            });
        }

        dispatch({
            type: REMOVE_AUTH_LOADING
        });

    } catch (err) {
        dispatch({
            type:ACTIVATION_FAIL
        });
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    }
}

// /jwt/refresh/
export const refresh = ()=> async dispatch =>{
    if(localStorage.getItem('refresh')){
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({
            refresh: localStorage.getItem('refresh')
        });

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/jwt/refresh/`, body, config);

            if (res.status===200){
                dispatch({
                    type:REFRESH_OK,
                    payload: res.data

                });
            }else{
                dispatch({
                    type:REFRESH_FAIL
                });
            }

        } catch (err) {
            dispatch({
                type:REFRESH_FAIL
            });
        }
    }else{
        dispatch({
            type:REFRESH_FAIL
        });
    }
}

// users/reset_password/
export const reset_password = (email)=> async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/users/reset_password/`, body, config);
        if (res.status===204){
            dispatch({
                type:RESET_PASSWORD_OK
            });
        }else{
            dispatch({
                type:RESET_PASSWORD_FAIL
            });
        }
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    } catch (err) {
        
        dispatch({
            type:RESET_PASSWORD_FAIL
        }); 
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    }
}

// /users/reset_password_confirm/
export const reset_password_confirm =(uid,token,new_password,re_new_password)=> async dispatch =>{
    dispatch({
        type: SET_AUTH_LOADING
    });

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        uid,
        token,
        new_password,
        re_new_password
    });

    if (new_password ===re_new_password){
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/users/reset_password_confirm/`,body,config)

        if (res.status===204){
            dispatch({
                type: RESET_PASSWORD_CONFIRM_OK
            });
        }else{
            dispatch({
                type: RESET_PASSWORD_CONFIRM_FAIL
            });
        }
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    }else{
        dispatch({
            type: RESET_PASSWORD_CONFIRM_FAIL
        });
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    }

}

// logout
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
    dispatch(setAlert('Succesfully logged out', 'green'));

    
}