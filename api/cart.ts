import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { cookies } from "next/headers";
export async function getCartByUser() {
    try {
        const _id = cookies().get("user")?.value
        if (!_id) {
            return null
        }
   const res = await axios.get(`${API_URL}/carts/${_id}`,{
    headers: {
      Authorization: `Bearer ${cookies().get("token")?.value}`,
    },
   });
   return res.data
  } catch (e) {
    return null;
  }
}