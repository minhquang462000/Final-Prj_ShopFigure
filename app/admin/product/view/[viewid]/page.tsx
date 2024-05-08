import { getProductById } from '@/api/product';
import ViewDetailProduct from '@/components/Admin/ViewDetailProduct';
import * as React from 'react';

export interface IpageProps {
}

export default async function page ({ params }: { params: { viewid: string } }) {;
  // console.log("params----->", params);
  
  const data = await getProductById(params.viewid);
  // console.log("data----->", data);
  
  return (
    <div>
      <ViewDetailProduct data={data} />
    </div>
  );
}
