import {
    SIGNIN_SUCCESS,
    SIGNIN_FAILED,
} from '../constants/ActionTypes';
import { history } from '../store/index'
import axios from "../appUtility/Api";


export const SignInSuccess = (authUser, admin_name) => {
    return {
      type: SIGNIN_SUCCESS,
      payload: authUser,
      adminName: admin_name
    }
  };
  

export const SignIn = ({email,password}) =>{
    return dispatch =>{
        axios({
            method: 'post',
            url: axios.defaults.baseURL + '/login',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
            },
           data:{
                email,
               password
           }
        }).then( (response) => {
            const responseBody = response.data
            if( responseBody.data && responseBody.data.token){
                let authUser = localStorage.setItem('token', JSON.stringify(responseBody.data.token));
                let admin_name = localStorage.setItem('admin_name', JSON.stringify(responseBody.data.admin_name));
                dispatch(SignInSuccess(authUser, admin_name))
            }else{
                console.log('nooooooooooooo')
            }
        });
    }
    };
