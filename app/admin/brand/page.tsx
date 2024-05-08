import { getAllBrand } from "@/api/brand";
import { getAllCharacter } from "@/api/character";
import ListBrand from "@/components/Admin/List/ListBrand";
import { IFilter } from "@/interfaces";


export default async function page({ searchParams }: {
  searchParams: {
    p: string | undefined, status: number
      | undefined
  }
}) {
  const query = { page: Number(searchParams.p) , limit: 5, search: "" ,status: searchParams.status};
  const { docs: data, total } = await getAllBrand(query as IFilter);
  // console.log("data----->", data);
  // console.log("total----->", total);
  
  return (
    <div>
         <ListBrand brands={data} total={total} query={query}  searchParams={searchParams}/>
    </div>
  );
}
