"use client";
import { useGetGrips } from "@/apis";
import Link from "next/link";

const Grips = () => {
  const { data: grips, isLoading } = useGetGrips();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1 className="text-3xl font-bold">Grips</h1>
      {grips?.map((grip) => (
        <div key={grip.id}>{grip.name}</div>
      ))}
    </div>
  );
};

export default Grips;
