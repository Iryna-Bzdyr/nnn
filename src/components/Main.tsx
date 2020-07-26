import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {thunkGetPost} from "../Redux/Thunks/PostThunk";
import {RootState} from "../Redux/rootReducer";


type Props = {

};

const Main:React.FC<Props> = (props:Props)=>{
    const dispatch = useDispatch()
    const postData = useSelector((state:RootState)=> state.postReducer.postData)
    useEffect(()=>{
        dispatch(thunkGetPost())
        console.log(postData)
    })
    return (
        <div></div>
    )
}
export default Main
