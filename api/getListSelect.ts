import { ICategory, IFilter, IUser } from "@/interfaces";
import axios from "axios";

import { cookies } from "next/headers";



// const axiosInstance = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL, 
//     headers: {
//         Authorization: `Bearer ${Cookies.get('token')}`
//     }
// });
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api/v1";

export async function getListSelect(url:string) {
    const accessToken = cookies().get('token')
    if (!accessToken) return null
    try {
        const res = await axios.get(`${API_URL}/${url}/all`, {
            headers: {
              Authorization: `Bearer ${cookies().get("token")?.value}`,
            },
          })
            return res.data
                
    } catch (e) {
        return null
    }
}
export async function getOneSelect(url:string,id:string) {
    const accessToken = cookies().get('token')
    if (!accessToken) return null
    try {
        const res = await axios.get(`${API_URL}/${url}/${id}`, {
            headers: {
              Authorization: `Bearer ${cookies().get("token")?.value}`,
            },
          })
            return res.data
                
    } catch (e) {
        return null
    }
}
