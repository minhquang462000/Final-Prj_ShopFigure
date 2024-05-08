
import FormUpdate from "@/components/Admin/FormUpdate/FormUpdate";
import { getBrandById } from "@/api/brand";
export interface IpageProps {}

export default async function page({ params }: { params: { id: string } }) {
  const data = await getBrandById(params.id);
  return (
    <div>
    <FormUpdate pageQ={"brand"} serverQ={"brands"} params={params} data={data}/>
  </div>
  );
}
