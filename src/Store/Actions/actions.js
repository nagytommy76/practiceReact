import axios from 'axios'

// Esetleges elírások miatt érdemes változókban tárolni
export const SET_POSTS = 'SET_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'
export const SET_DELETED_TO_DEFAULT = 'SET_DELETED_TO_DEFAULT'

export const savePost = (payload) => {
    return {
        type: SET_POSTS,
        payload
    }
}

export const setPost = (payload) =>{
    return dispatch => {
        // setTimeout(() => {
        //     dispatch(savePost(payload))
        // }, 1500)
        axios.get('https://jsonplaceholder.typicode.com/posts').then(result =>{
            console.log(result)
            dispatch(savePost(result.data))
        }).catch(error => {
            console.log(error)
        })
    }
}