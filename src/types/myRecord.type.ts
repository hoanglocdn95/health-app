export interface DiaryType {
  id: string;
  date: string;
  content: string;
}

export interface ExerciseType {
  id: string;
  name: string;
  memo: string;
  caloriesLost: number;
  duration: number;
}

export interface MyExerciseType {
  date: string;
  exercises: ExerciseType[];
}
