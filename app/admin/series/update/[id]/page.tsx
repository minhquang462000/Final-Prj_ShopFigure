

import { getBrandById } from "@/api/brand";
import { getCategoryById } from "@/api/category";
import { getSeriesById } from "@/api/series";
import FormUpdate from "@/components/Admin/FormUpdate/FormUpdate";



export interface IUpdateCategoryProps {
}

export default async function UpdateSeries ({ params }: { params: { id: string } }) {
  const data = await getSeriesById(params.id);
  // console.log(
  //   "🚀 ~ file: page.tsx:UpdateCategory ~ data:" ,data
  // );
  
  return (
    <div>
      <FormUpdate pageQ={"series"} serverQ={"series"} params={params} data={data}/>
    </div>
  );
}

