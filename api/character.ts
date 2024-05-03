
import { IUser } from '@/interfaces';
import axios from 'axios';
import Cookies from 'js-cookie';



const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, 
    headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
    }
});

export async function getAllCharacter() {
    const accessToken = Cookies.get('token')
    if (!accessToken) return null
    try {
        const res = await axiosInstance.get('/characters',{
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`}})
                return res.data.data as IUser
                
    } catch (e) {
        return null
    }
}
export async function getCharacterById(id: number) {
    const accessToken = Cookies.get('token')

    
    if (!accessToken) return null
    try {
        const res = await axiosInstance.get(`/characters/${id}`,{
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`}})
               return res.data as IUser
    } catch (e) {
        return null
    }
}
