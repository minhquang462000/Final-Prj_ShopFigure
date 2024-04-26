
import { IUser } from '@/interfaces';
import axios from "axios";


const specificCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('access-token'));
if (specificCookie) {
  const cookieValue = specificCookie.split('=')[1];
  console.log("Cookie value:", cookieValue);
} else {
  console.log('Cookie not found');
}

const axiosInstance = axios.create({
    baseURL: process.env.API_URL || "http://localhost:8080/api/v1",
    headers: {
        Authorization: specificCookie
    }
});

export async function getAlluser() {
    const accessToken = cookies().get('access-token')?.value
    if (!accessToken) return null
    try {
        const res = await axiosInstance.get('/users',{
            headers: {
                Authorization: `Bearer ${cookies().get('access-token')?.value}`}})
                return res.data.data as IUser
                
    } catch (e) {
        return null
    }
}
export async function getUserById(id: number) {
    const accessToken = specificCookie
    if (!accessToken) return null
    try {
        const res = await axiosInstance.get(`/users/${id}`,{
            headers: {
                Authorization: specificCookie}}).then(res => res.data as IUser)
                return res
                
    } catch (e) {
        return null
    }
}