import {PostActionTypes, SET_POSTS} from "../../Types/ActionTypes/PostActoinsTypes";
import {Post} from "../../Types/interfaces/interfaces";

export const getPost = (postData: Array<Post>):PostActionTypes=>({type:SET_POSTS, postData:postData})

