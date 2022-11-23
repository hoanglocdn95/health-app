export type MealType = "Morning" | "Lunch" | "Dinner" | "Snack";

export interface MealHistoryItem {
  id: string;
  date: string;
  mealType: MealType;
  srcImg: string;
}
