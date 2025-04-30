"use client";
import { useGetMechanics } from "@/apis";
import Link from "next/link";

const Mechanics = () => {
  const { data: mechanics, isLoading } = useGetMechanics();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1 className="text-3xl font-bold">Mechanics</h1>
      {mechanics?.map((mechanic) => (
        <div key={mechanic.id}>{mechanic.name}</div>
      ))}
    </div>
  );
};

export default Mechanics;
