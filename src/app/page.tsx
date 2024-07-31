'use client';
import Image from "next/image";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const [name, setName] = React.useState<string | null>('');
  
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    const username = localStorage.getItem('username');
    setName(username);
  },[]);
  return (
    <main className="flex h-screen bg-[#F7F7F7]">
    <Sidebar />
    <div className="">
      <Header name={name ?? ''}/>
      <Main />
    </div>
  </main>
  );
}
