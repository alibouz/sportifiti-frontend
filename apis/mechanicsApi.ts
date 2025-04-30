import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponseType } from "./types";

const getMechanics = async () => {
  try {
    const response = await axios<ApiResponseType[]>("/api/mechanics");
    return response.data;
  } catch (error) {
    throw new Error(`get mechanics error : ${error}`);
  }
};

const useGetMechanics = () =>
  useQuery({ queryKey: ["geMechanics"], queryFn: getMechanics });

export { useGetMechanics };
