"use client";
import { useGetDifficulties } from "@/apis";
import Link from "next/link";

const Difficulties = () => {
  const { data: difficulties, isLoading } = useGetDifficulties();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1 className="text-3xl font-bold">Difficulties</h1>
      {difficulties?.map((difficulty) => (
        <div key={difficulty.id}>{difficulty.name}</div>
      ))}
    </div>
  );
};

export default Difficulties;
