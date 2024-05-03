import { IBrand, ICategory, IFilter, IUser } from "@/interfaces";
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export async function getAllBrand(query: IFilter) {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const accessToken = Cookies.get("token");
  if (!accessToken) return null;
  try {
    const res = await axiosInstance.get(
      `/brands?page=${page}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return res.data;
  } catch (e) {
    return null;
  }
}
export async function getBrandById(id: number) {
  const accessToken = Cookies.get("token");

  if (!accessToken) return null;
  try {
    const res = await axiosInstance.get(`/brands/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return res.data as IBrand;
  } catch (e) {
    return null;
  }
}
