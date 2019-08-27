import {
    SIGNIN_SUCCESS,
    SIGNIN_FAILED,
} from '../constants/ActionTypes';
import { history } from '../store/index'
import axios from "../appUtility/Api";





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
                localStorage.setItem('token', JSON.stringify(responseBody.data.token));
                localStorage.setItem('admin_name', JSON.stringify(responseBody.data.admin_name));
                history.push(`${process.env.PUBLIC_URL}/dashboard`);
            }else{
                console.log('nooooooooooooo')
            }
        });
    }
    };
