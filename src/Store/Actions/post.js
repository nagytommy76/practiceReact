import axios from 'axios'
import * as actionTypes from './actionTypes'
export const savePost = (payload) => {
    return {
        type: actionTypes.SET_POSTS,
        payload
    }
}

export const setPost = () =>{
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(result =>{
            console.log(result)
            dispatch(savePost(result.data))
        }).catch(error => {
            console.log(error)
        })
    }
}