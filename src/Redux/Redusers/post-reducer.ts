import {Post} from "../../Types/interfaces/interfaces";
import {PostActionTypes, SET_POSTS} from "../../Types/ActionTypes/PostActoinsTypes";


export let initialState = {
    postData: [] as Array<Post>,
    authID: null as string|null
}

export type InitialStateType = typeof initialState

const postReducer = (state = initialState, action: PostActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                postData: action.postData
            }
        default:
            return state
    }
}


export default postReducer
