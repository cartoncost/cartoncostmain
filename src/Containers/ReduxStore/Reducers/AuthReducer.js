import * as actionTypes from '../Actions/ActionTypes'
const initialState={
    currentUser:null,
    isLoading:true
}

const AuthReducer=(state=initialState,action)=>{
   
            return state;
    
}

// const AuthReducer=(state=initialState,action)=>{
//     switch (action.type) {
//         case actionTypes.SET_USER:
//             return{
//                 currentUser:action.payload.currentUser,
//                 isLoading:false
//             }
//             break;
    
//         default:
//             return state;
//     }
// }

export default AuthReducer