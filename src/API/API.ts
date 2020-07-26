import axios, {AxiosResponse} from 'axios'
import {Post} from "../Types/interfaces/interfaces";


const instanse = axios.create({
    withCredentials:true,
    baseURL:'https://my-task-list-data.herokuapp.com',
})

export const postAPI = {
    getPost(){instanse.get<Array<Post>>('/post').then(response=>response.data)}
}

