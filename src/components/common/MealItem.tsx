import { MealHistoryItem } from "types/top.type";

const MealItem = ({ date, mealType, srcImg }: MealHistoryItem) => {
  return (
    <div className="mealItem">
      <img src={srcImg} alt="" />
      <div className="mealItem__info">
        <p>{`${date}${mealType}`}</p>
      </div>
    </div>
  );
};

export default MealItem;
