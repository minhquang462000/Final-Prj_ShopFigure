import { getUserById } from '@/api/user';
import FormUpdateUser from '@/components/Admin/FormUpdate/FormUpdateUser';
import * as React from 'react';

export interface IpageProps {
}

export default async function page ({ params }: { params: { id: string } }) {
  const data = await getUserById(params.id);
  return (
    <div>
      <FormUpdateUser  data={data} />
    </div>
  );
}
