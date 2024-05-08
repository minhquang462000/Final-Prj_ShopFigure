
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { getCharacterById } from "@/api/character";
import { useRouter } from "next/navigation";
import FormUpdate from "@/components/Admin/FormUpdate/FormUpdate";
export interface IpageProps {}

export default async function page({ params }: { params: { id: string } }) {
  const data = await getCharacterById(params.id);
  return (
    <div>
    <FormUpdate pageQ={"character"} serverQ={"characters"} params={params} data={data}/>
  </div>
  );
}
