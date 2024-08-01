'use client';
import Image from "next/image";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import Loading from "./Components/Loading";

export default function Home() {
  const [name, setName] = React.useState<string | null>('');
  const [loading, setLoading] = React.useState(true);
  
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/login');
    }else {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const username = localStorage.getItem('username');
    setName(username);
  },[]);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <main className="flex h-screen bg-[#F7F7F7]">
    <Sidebar name={name ?? ''}/>
    <div className="">
      <Header name={name ?? ''}/>
      <Main />
    </div>
  </main>
  );
}
