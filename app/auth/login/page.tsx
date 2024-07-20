import LoginComponent from '@/components/Auth/LoginComponent';
import MainLayout from '@/layouts/main';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

export interface IpageProps {
}

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main className="text-black text-xl  w-screen bg-gradient-to-r from-[#cdf2f9] to-[#6fe9ff] mx-auto">
        <ToastContainer autoClose={2000} />
        <LoginComponent />
      </main>
    </MainLayout>
  );
}
