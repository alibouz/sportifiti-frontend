"use client";
import { useGetMuscles } from "@/apis";
import Link from "next/link";

const Muscles = () => {
  const { data: muscles, isLoading } = useGetMuscles();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1 className="text-3xl font-bold">Muscles</h1>
      {muscles?.map((muscle) => (
        <div key={muscle.id}>{muscle.name}</div>
      ))}
    </div>
  );
};

export default Muscles;
