
import { getUserById } from "@/api/user";
import AdminPage from "@/components/Admin/AdminPage";
import { ToastContainer } from "react-toastify";

export interface IpageProps { }
export default async function page({ params }: { params: { id: string } }) {
 const data = await getUserById(params.id);

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
   
<AdminPage data={data}/>   </>;
}
