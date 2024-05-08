'use client'
import { getUserById } from "@/api/user";
import UpdateAdmin from "@/components/Admin/AdminPage/UpdateAdmin";
import ViewAdmin from "@/components/Admin/AdminPage/ViewAdmin";
import { IUser } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export interface IpageProps { 
    data:IUser
}
export default function AdminPage(props: IpageProps) {
  const { data } = props
return (
  <div>
     <ToastContainer
     position="top-right"
     autoClose={3000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
   />
  <ViewAdmin data={data} />
  </div>
)}