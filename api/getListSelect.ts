import { IUser } from '@/interfaces';
import axios from 'axios';
import Cookies from 'js-cookie';



const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, 
    headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
    }
});

export async function getListSeclect(url:string) {
    const accessToken = Cookies.get('token')
    if (!accessToken) return null
    try {
        const res = await axiosInstance.get(`${url}/all`,{
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`}})
                return res.data.data as IUser
                
    } catch (e) {
        return null
    }
}
