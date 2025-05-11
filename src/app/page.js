import Image from "next/image";
import Header from "@/app/component/header";
import Mvp from "@/app/component/mvp";
import Features from "@/app/component/features";
export default function Home() {
  return (
    <>
      <Header />
      <Mvp />
      <Features />
    </>
  );
}
