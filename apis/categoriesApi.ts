import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CategoryType } from "./types";

const getCategories = async () => {
  try {
    const response = await axios<CategoryType[]>("/api/categories");
    return response.data;
  } catch (error) {
    throw new Error(`get categories error : ${error}`);
  }
};

const useGetCategories = () =>
  useQuery({ queryKey: ["geCategories"], queryFn: getCategories });

export { useGetCategories };
