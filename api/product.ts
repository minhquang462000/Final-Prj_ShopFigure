import { ICategory, IFilter, IUser } from "@/interfaces";
import axios from "axios";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api/v1";

export async function getAllProduct(query: IFilter) {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const status= query.status ? query.status : 1
  const accessToken = cookies().get("token")?.value; 

  
  // if (!accessToken) return null;
  try {
    const res = await axios.get(
      `${API_URL}/products?page=${page}&limit=${limit}&status=${status}`,
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
      }
    );
    return res.data;
    
  } catch (e) {
 
    
    return null;
  }
}
export async function getAllProductHome(query: IFilter,lable:string) {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const status= query.status ? query.status : 1
  const wordFilter = query.wordFilter ? query.wordFilter : "";
  const accessToken = cookies().get("token")?.value; 
  const wordOject= lable

  
  // if (!accessToken) return null;
  try {
    const res = await axios.get(
      `${API_URL}/products?page=${page}&limit=${limit}&status=${status}&${wordOject}=${wordFilter}`,
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
      }
    );
    return res.data;
    
  } catch (e) {
 
    
    return null;
  }
}
export async function getAllProductClient(query: IFilter,lable:string) { 
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const status= query.status ? query.status : 1
  const wordFilter = query.wordFilter ? query.wordFilter : "";
  const wordOject = lable || ""
  const keyword = query.search ? query.search : "";

  
  // if (!accessToken) return null;
  try {
    const res = await axios.get(
      `${API_URL}/products/client?page=${page}&limit=${limit}&status=${status}&${wordOject}=${wordFilter}&search=${keyword}`,
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
      }
    );
    return res.data;
    
  } catch (e) {
 
    
    return null;
  }
}

export async function getProductById(id: string) {
  try {
  
   const res = await axios.get(`${API_URL}/products/${id}`,{
    headers: {
      Authorization: `Bearer ${cookies().get("token")?.value}`,
    },
   });
   return res.data
  } catch (e) {
    return null;
  }
}