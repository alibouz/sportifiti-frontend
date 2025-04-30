import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponseType } from "./types";

const getForces = async () => {
  try {
    const response = await axios<ApiResponseType[]>("/api/forces");
    return response.data;
  } catch (error) {
    throw new Error(`get forces error : ${error}`);
  }
};

const useGetForces = () =>
  useQuery({ queryKey: ["geForces"], queryFn: getForces });

export { useGetForces };
