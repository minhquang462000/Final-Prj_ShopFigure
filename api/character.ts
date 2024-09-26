
import { IBrand, ICategory, IFilter, IUser } from "@/interfaces";
import axios from "axios";
import { cookies } from "next/headers";
// import { cookies } from "next/headers";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api/v1";
// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     Authorization: `Bearer ${Cookies.get("token")}`,
//   },
// });
export async function getAllCharacter(query: IFilter) {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const status= query.status ? query.status : 1
  const accessToken = cookies().get("token")?.value; 
  
  // if (!accessToken) return null;
  try {
    const res = await axios.get(
      `${API_URL}/characters?page=${page}&limit=${limit}&status=${status}`,
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
      }
    );
    return res.data;
    // console.log("🚀 ~ file: character.ts:res.data", res.data);
    
    
  } catch (e) {
    return null;
  }
}
export async function getCharacterById(id: string) {
  try {
    const res = await axios.get(`${API_URL}/characters/${id}`,{
     headers: {
       Authorization: `Bearer ${cookies().get("token")?.value}`,
     },
    });
    return res.data
   } catch (e) {
     return null;
   }
}