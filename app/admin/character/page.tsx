import { getAllCharacter } from "@/api/character";
import ListCharacter from "@/components/Admin/List/ListCharacter";
import { IFilter } from "@/interfaces";


export default async function page({ searchParams }: {
  searchParams: {
    p: string | undefined, status: number
      | undefined
  }
}) {
  const query = { page: Number(searchParams.p) , limit: 5, search: "" ,status: searchParams.status};
  const { docs: data, total } = await getAllCharacter(query as IFilter);
  return (
    <div>
         <ListCharacter characters={data} total={total} query={query}  searchParams={searchParams}/>
    </div>
  );
}
