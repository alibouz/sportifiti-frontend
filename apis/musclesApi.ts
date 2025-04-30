import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MuscleType } from "./types";

const getMuscles = async () => {
  try {
    const response = await axios<MuscleType[]>("/api/muscles");
    return response.data;
  } catch (error) {
    throw new Error(`get muscles error : ${error}`);
  }
};

const useGetMuscles = () =>
  useQuery({ queryKey: ["getMuscles"], queryFn: getMuscles });

export { useGetMuscles };
