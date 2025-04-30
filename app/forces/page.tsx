"use client";
import { useGetForces } from "@/apis";
import Link from "next/link";

const Forces = () => {
  const { data: forces, isLoading } = useGetForces();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1 className="text-3xl font-bold">Forces</h1>
      {forces?.map((force) => (
        <div key={force.id}>{force.name}</div>
      ))}
    </div>
  );
};

export default Forces;
