"use client";
import { useGetCategories } from "@/apis";
import Link from "next/link";

const Categories = () => {
  const { data: categories, isLoading } = useGetCategories();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1 className="text-3xl font-bold">Categories</h1>
      {categories?.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </div>
  );
};

export default Categories;
