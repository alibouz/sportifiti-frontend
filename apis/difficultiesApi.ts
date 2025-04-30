import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiNameType } from "./types";

const getDifficulties = async () => {
  try {
    const response = await axios<ApiNameType[]>("/api/difficulties");
    return response.data;
  } catch (error) {
    throw new Error(`get difficulties error : ${error}`);
  }
};

const useGetDifficulties = () =>
  useQuery({ queryKey: ["geDifficulties"], queryFn: getDifficulties });

export { useGetDifficulties };
