import {
    SIGNIN_USER,
    SIGNIN_SUCCESS,
} from "../constants/ActionTypes";

const INIT_STATE =  {
    authUser: localStorage.getItem('token')
}


export default (state = INIT_STATE, action) =>{
    switch(action.type){
        case SIGNIN_USER:{
           return {

           }
        }
        default:
            return state;
    }
}
