

import { getCategoryById } from "@/api/category";
import FormUpdate from "@/components/Admin/FormUpdate/FormUpdate";



export interface IUpdateCategoryProps {
}

export default async function UpdateCategory ({ params }: { params: { id: string } }) {
  const data = await getCategoryById(params.id);
  // console.log(
  //   "🚀 ~ file: page.tsx:UpdateCategory ~ data:" ,data
  // );
  
  return (
    <div>
      <FormUpdate pageQ={"category"} serverQ={"categories"} params={params} data={data}/>
    </div>
  );
}

