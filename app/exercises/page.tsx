"use client";
import { useGetExercises } from "@/apis";
import ExerciseCard from "@/components/ExerciseCard";
import Link from "next/link";

const Exercises = () => {
  const { data, isLoading } = useGetExercises({});
  const exercises = data?.exercises;

  if (isLoading) return <div>Loading...</div>;

  if (!exercises?.length || exercises.length === 0)
    return (
      <div>
        <Link href="/">Back to Home</Link>
        <p className="text-xl font-medium">No Exercises Found</p>
      </div>
    );

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4 lg:gap-6">
      {exercises?.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export default Exercises;
