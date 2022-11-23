import { useState } from "react";
import format from "date-fns/format";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import IconKnife from "assets/img/icon_knife.png";
import IconCup from "assets/img/icon_cup.png";
import { LOAD_MORE, LIMIT_ITEM_PER_PAGE, DATE_FORMAT } from "constants/common";

import Button from "components/common/Button";
import LineChart from "components/common/LineChart";
import MealItem from "pages/TopPage/MealItem";
import { isShowLoadMore } from "utils/common";
import { MealHistoryItems } from "dummyData/mealHistory";
import { achievementRate } from "dummyData/fakeData";

const transitInputs = [
  {
    iconSrc: IconKnife,
    mealType: "Morning",
    action: () => {},
  },
  {
    iconSrc: IconKnife,
    mealType: "Lunch",
    action: () => {},
  },
  {
    iconSrc: IconKnife,
    mealType: "Dinner",
    action: () => {},
  },
  {
    iconSrc: IconCup,
    mealType: "Snack",
    action: () => {},
  },
];

const optionsChart = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    x: {
      ticks: {
        color: "#FFFFFF",
      },
      grid: {
        color: "#777777",
        borderColor: "#777777",
      },
    },
  },
};

const labelsChart = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

const dataChart = {
  labels: labelsChart,
  datasets: [
    {
      data: [100, 90, 60, 70, 70, 65, 80, 75, 70, 65, 60, 85],
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
    {
      data: [100, 95, 90, 80, 75, 60, 55, 50, 40, 35, 30, 20],
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};

const TopPage = () => {
  const [totalMealHistory, setTotalMealHistory] =
    useState<number>(LIMIT_ITEM_PER_PAGE);
  const renderTransitInput = () => {
    return transitInputs.map(({ iconSrc, mealType, action }) => {
      return (
        <div key={mealType} className="transitInput__item" onClick={action}>
          <img src={iconSrc} alt="" />
          <p>{mealType}</p>
        </div>
      );
    });
  };
  const renderMealHistory = () => {
    return MealHistoryItems.filter((_, index) => index < totalMealHistory).map(
      (meal) => {
        return <MealItem key={meal.id} {...meal} />;
      }
    );
  };

  return (
    <div className="top">
      <div className="top__info">
        <div className="achievementRate">
          <div className="achievementRate__circle">
            <CircularProgressbarWithChildren value={achievementRate.percent}>
              <div className="achievementRate__data">
                <p>
                  {format(
                    new Date(achievementRate.date),
                    DATE_FORMAT.ACHIEVEMENT_RATE
                  )}
                </p>
                <p>{achievementRate.percent}%</p>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="percentFat">
          <LineChart options={optionsChart} data={dataChart} />
        </div>
      </div>
      <div className="transitInput">{renderTransitInput()}</div>
      <div className="mealHistory">{renderMealHistory()}</div>
      {isShowLoadMore(MealHistoryItems.length, totalMealHistory) && (
        <Button
          label={LOAD_MORE.RECORD}
          action={() =>
            setTotalMealHistory(
              (previousState) => previousState + LIMIT_ITEM_PER_PAGE
            )
          }
        />
      )}
    </div>
  );
};

export default TopPage;
