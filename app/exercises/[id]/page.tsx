"use client";

import { useParams } from "next/navigation";

const ExerciseDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>ExerciseDetails</h1># {id}
    </div>
  );
};

export default ExerciseDetails;
