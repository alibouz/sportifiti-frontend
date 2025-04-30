import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponseType } from "./types";

const getGrips = async () => {
  try {
    const response = await axios<ApiResponseType[]>("/api/grips");
    return response.data;
  } catch (error) {
    throw new Error(`get grips error : ${error}`);
  }
};

const useGetGrips = () =>
  useQuery({ queryKey: ["geGrips"], queryFn: getGrips });

export { useGetGrips };
