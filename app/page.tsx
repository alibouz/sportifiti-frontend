import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 via-purple-500 to-pink-500 opacity-50">
        SPORTIFI
      </h1>
      <div className="flex gap-4 flex-wrap">
        <Tabs
          defaultValue="filters"
          className="min-w-3xl h-[80dvh] border-2 border-purple-200 rounded-lg"
        >
          <TabsList className="bg-purple-300">
            <TabsTrigger
              value="filters"
              className="text-slate-600 px-4 cursor-pointer"
            >
              Filters
            </TabsTrigger>
            <TabsTrigger
              value="images"
              className="text-slate-600 px-4 cursor-pointer"
            >
              Images
            </TabsTrigger>
          </TabsList>
          <TabsContent value="filters" className="p-4 flex gap-2">
            <Button variant="outline">
              <Link href="/exercises">Exercises</Link>
            </Button>
            <Button variant="outline">
              <Link href="/muscles">Muscles</Link>
            </Button>
            <Button variant="outline">
              <Link href="/grips">Grips</Link>
            </Button>
            <Button variant="outline">
              <Link href="/mechanics">Mechanics</Link>
            </Button>
            <Button variant="outline">
              <Link href="/categories">Categories</Link>
            </Button>
            <Button variant="outline">
              <Link href="/difficulties">Difficulties</Link>
            </Button>
            <Button variant="outline">
              <Link href="/forces">Exercises Forces</Link>
            </Button>
          </TabsContent>
          <TabsContent value="images" className="p-4 flex gap-2">
            Images
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
