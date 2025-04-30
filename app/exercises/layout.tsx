import { Dumbbell } from "lucide-react";

export default async function ExercisesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="flex items-center gap-6">
        <Dumbbell className="size-20 -rotate-45 text-blue-600" />
        <h1 className="text-3xl font-bold text-slate-800">Exercise Explorer</h1>
      </div>
      {children}
    </div>
  );
}
