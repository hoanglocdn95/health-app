import { useState } from 'react';
import format from 'date-fns/format';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import IconKnife from 'assets/img/icon_knife.png';
import IconCup from 'assets/img/icon_cup.png';
import { LOAD_MORE, LIMIT_ITEM_PER_PAGE, DATE_FORMAT } from 'constants/common';

import Button from 'components/common/Button';
import LineChart from 'components/common/LineChart';
import MealItem from 'pages/TopPage/MealItem';
import { isShowLoadMore } from 'utils/common';
import { MealHistoryItems } from 'dummyData/mealHistory';
import { achievementRate } from 'dummyData/fakeData';

const transitInputs = [
  {
    iconSrc: IconKnife,
    mealType: 'Morning',
    action: () => {},
  },
  {
    iconSrc: IconKnife,
    mealType: 'Lunch',
    action: () => {},
  },
  {
    iconSrc: IconKnife,
    mealType: 'Dinner',
    action: () => {},
  },
  {
    iconSrc: IconCup,
    mealType: 'Snack',
    action: () => {},
  },
];

const TopPage = () => {
  const [totalMealHistory, setTotalMealHistory] = useState(LIMIT_ITEM_PER_PAGE);
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
          <LineChart />
        </div>
      </div>
      <div className="transitInput">{renderTransitInput()}</div>
      <div className="mealHistory">{renderMealHistory()}</div>
      {isShowLoadMore(MealHistoryItems.length, totalMealHistory) && (
        <Button
          label={LOAD_MORE}
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
