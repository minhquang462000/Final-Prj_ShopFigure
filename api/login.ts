import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
    baseURL: process.env.API_URL || "http://localhost:8080/api/v1",
    headers: {
        Authorization: `Bearer ${cookies().get('x-access-token')?.value}`
    }
});


