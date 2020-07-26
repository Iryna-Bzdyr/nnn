import {Post} from "../interfaces/interfaces";


export const SET_POSTS: string = 'SET_POSTS'

interface GetPostAction {
    type: typeof SET_POSTS,
    postData: Array<Post>
}

export type PostActionTypes = GetPostAction
