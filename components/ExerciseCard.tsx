"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BicepsFlexed, Dumbbell, Gauge, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ExerciseType } from "@/apis/types";

export default function ExerciseCard({
  exercise: {
    id,
    name,
    mechanic,
    category,
    difficulty,
    force,
    grips,
    primary_muscles,
    secondary_muscles,
  },
}: {
  exercise: ExerciseType;
}) {
  return (
    <Card className="w-full max-w-xl flex flex-col justify-between shadow-lg rounded-2xl">
      <CardHeader className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={"/images/PowerLiftingBench.jpg"}
          alt={name}
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
        <Badge className="absolute top-2 right-2 bg-purple-600 text-white">
          {category.name}
        </Badge>
      </CardHeader>

      <CardContent className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="grid grid-cols-2 gap-2">
          <span className="flex items-center gap-2 lg:gap-4">
            <Gauge className="text-muted-foreground" />
            {difficulty.name}
          </span>
          <span className="flex items-center gap-2 lg:gap-4">
            <BicepsFlexed className="text-muted-foreground" /> {force.name}
          </span>
        </div>
        <span className="flex items-center gap-2 lg:gap-4">
          <Dumbbell className="-rotate-45 text-muted-foreground" />
          {mechanic.name}
        </span>
        {grips.length > 0 && (
          <div className="flex flex-wrap gap-1 text-xs">
            <Badge variant="secondary">{grips.map((grip) => grip.name)}</Badge>
          </div>
        )}
        <div className="text-sm">
          <span className="font-semibold text-muted-foreground">
            Primary Muscles:
          </span>
          <div className="flex flex-wrap gap-2 mt-1">
            {primary_muscles.map((muscle) => (
              <Badge
                key={muscle.id}
                className="text-blue-500 bg-blue-100 text-xs"
              >
                {muscle.name}
              </Badge>
            ))}
          </div>
          {secondary_muscles.length > 0 && (
            <>
              <span className="font-semibold text-muted-foreground">
                Secondary Muscles:
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {secondary_muscles.map((muscle) => (
                  <Badge
                    key={muscle.id}
                    className="text-blue-500 bg-blue-100 text-xs"
                  >
                    {muscle.name}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center p-4">
        <Link
          href="#"
          className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          <Heart className="h-5 w-5" /> Save
        </Link>
        <Button className="bg-blue-600 hover:bg-blue-800">
          <Link href={`/exercises/${id}`}> View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
