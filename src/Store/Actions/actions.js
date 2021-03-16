// Esetleges elírások miatt érdemes változókban tárolni
export const SET_POSTS = 'SET_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'
export const SET_DELETED_TO_DEFAULT = 'SET_DELETED_TO_DEFAULT'

export const setPost = (payload) =>{
    return {
        type: SET_POSTS,
        payload
    }
}