import { getAllBrand } from "@/api/brand";
import { getAllSeries } from "@/api/series";
import ListSeries from "@/components/Admin/List/ListSeries";
import { IFilter } from "@/interfaces";


export default async function page({ searchParams }: {
  searchParams: {
    p: string | undefined, status: number
      | undefined
  }
}) {
  const query = { page: Number(searchParams.p) , limit: 5, search: "" ,status: searchParams.status};
  const { docs: data, total } = await getAllSeries(query as IFilter);
  // console.log("data----->", data);
  // console.log("total----->", total);
  
  return (
    <div>
         <ListSeries series={data} total={total} query={query}  searchParams={searchParams}/>
    </div>
  );
}
