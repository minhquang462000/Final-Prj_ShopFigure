
import { ICategory, IFilter } from "@/interfaces";
import { getAllUser } from "@/api/user";
import ListProduct from "@/components/Admin/List/ListProduct";
import { getAllProduct } from "@/api/product";

export default async function page({ searchParams }: {
  searchParams: {
    p: string | undefined, status: number
      | undefined
  }
}) {
  // const [page, setPage] = useState<number>(1);
  // console.log("searchParams", searchParams.p);
  // console.log("searchParams", searchParams.status);
  

  const query = { page: Number(searchParams.p) , limit: 5, search: "" ,status: searchParams.status};
  // const [categories, setCategories] = useState<any>([]);
  const { docs: data, total } = await getAllProduct(query as IFilter);
  // console.log("data----->", data);
  // console.log("total----->", total);

  return (
    <div className="rounded-sm border border-stroke bg-white text-sm ">
      <ListProduct products={data} total={total} query={query}  searchParams={searchParams}/>

    </div>
  );
}
