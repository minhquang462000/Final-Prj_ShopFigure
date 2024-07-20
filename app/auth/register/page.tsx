import RegisterComponent from '@/components/Auth/RegisterComponent';
import MainLayout from '@/layouts/main';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <MainLayout>
      <main className="text-black text-xl   w-screen bg-gradient-to-r from-[#cdf2f9] to-[#6fe9ff] mx-auto">
        <ToastContainer autoClose={2000} />
        <RegisterComponent />
      </main>
    </MainLayout>
  );
}
