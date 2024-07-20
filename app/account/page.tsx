import { getUserById } from '@/api/user';
import FormAccount from '@/components/Forms/FormAccount';
import MainLayout from '@/layouts/main';
import { cookies } from 'next/headers';
import * as React from 'react';

export interface IpageProps {
}

export default async function page() {
  const _id = cookies().get("user")?.value
  const data = await getUserById(_id as string)
  
  return (
    <MainLayout>
      <main className='w-full mt-[108px]'>
        <FormAccount data={data}/>
      </main>
    </MainLayout>
  );
}
