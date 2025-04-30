export type ApiNameType = { id: number; name: string };
export type ApiResponseType = ApiNameType & {
  description: string;
};
export type MuscleType = {
  id: number;
  name: string;
  name_en_us?: string;
  scientific_name?: string;
  description?: string;
};
export type ExerciseType = {
  id: number;
  name: string;
  category: ApiNameType;
  difficulty: ApiNameType;
  force: ApiNameType;
  grips: ApiNameType[];
  mechanic: ApiNameType;
  primary_muscles: ApiNameType[];
  secondary_muscles: ApiNameType[];
  video_links: {
    male_video_1: string;
    male_video_2: string;
    female_video_1: string;
    female_video_2: string;
  }[];
};
export type CategoryType = ApiResponseType & { image: string };
