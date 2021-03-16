import { SET_POSTS, DELETE_POSTS, SET_DELETED_TO_DEFAULT } from './Actions/actions'
const initialState ={
    posts: [
        { 
            id: 0,
            title: 'Teszt Post',
            body: 'A reducer.js file-ból jövök, és default vagyok'
        }
    ],
    isDeleted: false,
    deletedId: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            // console.log('[CURRENT STATE] ', state)
            // console.log('[ACTION PAYLOAD] ',action.payload)
            const data = {
                ...state,
                // Ez nem lehet push, mert csak egy másolatot adok hozzá a jelenlegi poszthoz
                posts: state.posts.concat(action.payload)
            }
            // console.log('[RETURN DATA] ',data)
            return data   
        case DELETE_POSTS:
            // console.log('[ACTION ID]', action.id)
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.id),
                isDeleted: state.isDeleted = true,
                deletedId: state.deletedId = action.id
            }  
        case SET_DELETED_TO_DEFAULT:
            return{
                ...state,
                isDeleted: state.isDeleted = false,
                deletedId: state.deletedId = null
            } 
        default:
        return state   
    }
}

export default reducer