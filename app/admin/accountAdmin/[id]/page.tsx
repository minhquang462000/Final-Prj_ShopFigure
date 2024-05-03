'use client'
import { getUserById } from "@/api/user";
import UpdateAdmin from "@/components/Admin/AdminPage/UpdateAdmin";
import ViewAdmin from "@/components/Admin/AdminPage/ViewAdmin";
import { IUser } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export interface IpageProps { }
export default function page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<IUser>({} as IUser)
  const getUser = async () => {
    const res = await getUserById(Number(params.id))
    setData(res as IUser)
  }
  useEffect(() => {
  
    getUser()
  }, [])
  const [tabId, setTabId] = useState<number>(0)
const renderTab = useCallback(() => {
  switch (tabId) {
    case 0:
      return <ViewAdmin data={data} setTabId={setTabId} />
    case 1:
      return <UpdateAdmin data={data} setTabId={setTabId} getUser={getUser} />
    default:
      break;
  }
}, [tabId, data])


  return <>
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
    {renderTab()}</>;
}
