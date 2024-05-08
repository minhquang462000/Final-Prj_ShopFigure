import { getListSeclect } from '@/api/getListSelect';
import { getProductById } from '@/api/product';
import FormUpdateProduct from '@/components/Admin/FormUpdate/FormUpdateProduct';
import { IBrand, ICategory, ICharacter, ISeries } from '@/interfaces';
import * as React from 'react';

export interface IpageProps {
}

export default async function page({ params }: { params: { updateid: string } }) {
  const dataById = await getProductById(params.updateid);
  // console.log("dataById", dataById);

  return (
    <div>
      <  FormUpdateProduct data={dataById} />
    </div>
  );
}
