import { ThunkAction } from 'redux-thunk'
import {postAPI} from "../../API/API";
import {getPost} from "../Actions/PostActions";
import {RootState} from "../rootReducer";
import {PostActionTypes} from "../../Types/ActionTypes/PostActoinsTypes";
import {AxiosResponse} from "axios";

type ThunkType = ThunkAction<void, RootState, unknown, PostActionTypes>

export const thunkGetPost = ():ThunkType =>async dispatch=>{

   let data = await postAPI.getPost()
   dispatch(getPost(data))
}
