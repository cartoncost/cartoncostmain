// import * as actionTypes from './ActionTypes'

// export 7const setUser=(user)=>{
//     return{
//         type:actionTypes.SET_USER,
//         payload:{
//             currentUser:user
//         }
//     }
// }


import Axios from 'axios'
import * as actionTypes from './ActionTypes'

export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START
    }
}


export const authSuccess=(authData)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        authData:authData
    }
}

export const authFail=(error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}


export const auth=(username,email,password)=>{
    return dispatch=>{
        dispatch(authStart())
        let authData={
            email:email,
            password:password,
            username:username
        }
        Axios.post('http://157.245.142.119/api/registration/',authData)
        .then(Response=>{
            console.log("rrrrrrrrrrrrrrrrrrrr",Response.data)
            dispatch(authSuccess(Response.data))
        })
        .catch(error => {
            console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("response",error.response.data.message);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log("request",error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
        })
    }
}