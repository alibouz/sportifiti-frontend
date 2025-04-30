import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ExerciseType } from "./types";

export type getExercisesResponse = {
  total_count: number;
  total_pages: number;
  page: number;
  limit: number;
  exercises: ExerciseType[];
};

type ExercisesParams = {
  name?: string;
  difficulty_id?: number;
  grip_ids?: number;
  force_id?: number;
  mechanic_id?: number;
  category_ids?: number;
  primary_muscle_ids?: number[]; // Expecting a list of muscle IDs
  page?: number;
  limit?: number;
};

const getExercises = async (params: ExercisesParams) => {
  try {
    const response = await axios<getExercisesResponse>("/api/exercises", {
      params: {
        ...params,
        primary_muscle_ids: params?.primary_muscle_ids
          ? `[${params?.primary_muscle_ids.join(",")}]`
          : undefined,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`get exercises error : ${error}`);
  }
};

const useGetExercises = (params: ExercisesParams) =>
  useQuery({ queryKey: ["getExercises"], queryFn: () => getExercises(params) });

export { useGetExercises };
