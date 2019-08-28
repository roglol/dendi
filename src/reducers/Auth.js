import {
    SIGNIN_USER,
    SIGNIN_SUCCESS,
} from "../constants/ActionTypes";

const INIT_STATE =  {
    authUser: localStorage.getItem('token'),
    admin_name:'',
}


export default (state = INIT_STATE, action) =>{
    switch(action.type){
        case SIGNIN_SUCCESS:{
           return {
             ...state,
             authUser: action.payload,
             admin_name:action.adminName
           }
        }
        default:
            return state;
    }
}
