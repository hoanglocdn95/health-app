import format from 'date-fns/format';
import { DATE_FORMAT } from 'constants/common';
import { MealHistoryItem } from 'types/top.type';

const MealItem = ({ date, mealType, srcImg }: MealHistoryItem) => {
  return (
    <div
      className="mealHistory__item"
      style={{
        backgroundImage: `url(${srcImg})`,
      }}
    >
      <div className="mealHistory__info">
        <p>{`${format(
          new Date(date),
          DATE_FORMAT.MEAL_HISTORY
        )}.${mealType}`}</p>
      </div>
    </div>
  );
};

export default MealItem;
