import { IUser } from '@/interfaces';
import axios from 'axios';
import Cookies from 'js-cookie';



const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, 
    headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
    }
});

export async function getAllProducts() {
    const accessToken = Cookies.get('token')
    if (!accessToken) return null
    try {
        const res = await axiosInstance.get('/products',{
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`}})
                return res.data.data as IUser
                
    } catch (e) {
        return null
    }
}
export async function getProductById(id: number) {
    const accessToken = Cookies.get('token')

    
    if (!accessToken) return null
    try {
        const res = await axiosInstance.get(`/products/${id}`,{
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`}})
               return res.data as IUser
              
                
    } catch (e) {
        return null
    }
}