import MealItem from "components/common/MealItem";
import { MealHistoryItems } from "dummyData/mealHistory";

import IconKnife from "assets/img/icon_knife.jpg";
import IconCup from "assets/img/icon_cup.jpg";

const TopPage = () => {
  const transitInputs = [
    {
      iconSrc: IconKnife,
      mealType: "Morning",
    },
    {
      iconSrc: IconKnife,
      mealType: "Lunch",
    },
    {
      iconSrc: IconKnife,
      mealType: "Dinner",
    },
    {
      iconSrc: IconCup,
      mealType: "Snack",
    },
  ];
  const renderTransitInput = () => {
    return transitInputs.map((item) => {
      return <div></div>;
    });
  };
  const renderMealHistory = () => {
    return MealHistoryItems.map((meal) => {
      return <MealItem key={meal.id} {...meal} />;
    });
  };
  return (
    <div className="top">
      <div className="top__info">
        <div className="achievementRate"></div>
        <div className="percentFat"></div>
      </div>
      <div className="transitInput"></div>
      <div className="mealHistory">{renderMealHistory()}</div>
    </div>
  );
};

export default TopPage;
