import { useState } from "react";
import format from "date-fns/format";

import Button from "components/common/Button";
import {
  RECORD_TOPICS,
  LOAD_MORE,
  LIMIT_ITEM_PER_PAGE,
  CONFIG_LINE_CHART,
  INTERVAL_LABELS,
  DATE_FORMAT,
  UNIT_CALORIES,
} from "constants/common";
import { myBodyRecord, myExercises, myDiaries } from "dummyData/myRecord";
import {
  convertSecondToMinute,
  isShowLoadMore,
  formatNumber,
} from "utils/common";
import MyRecommend1 from "assets/img/myRecord/myRecommend_1.jpg";
import MyRecommend2 from "assets/img/myRecord/myRecommend_2.jpg";
import MyRecommend3 from "assets/img/myRecord/myRecommend_3.jpg";
import LineChart from "components/common/LineChart";
import DiaryItem from "pages/MyRecordPage/DiaryItem";
import { dataChart } from "dummyData/fakeData";

const bgRecommend = [MyRecommend1, MyRecommend2, MyRecommend3];

const MyRecordPage = () => {
  const [totalDiaries, setTotalDiaries] = useState<number>(LIMIT_ITEM_PER_PAGE);
  const recordTopics = Object.keys(RECORD_TOPICS);

  const renderRecordTopic = () => {
    return recordTopics.map((keyItem, index) => {
      return (
        <div key={keyItem} className="topicRecord__item">
          <div
            className="topicRecord__content"
            style={{
              backgroundImage: `url(${bgRecommend[index]})`,
            }}
          >
            <p>{keyItem}</p>
            <div className="topicRecord__note">
              <p>{RECORD_TOPICS[keyItem as keyof typeof RECORD_TOPICS]}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderIntervalLabel = () => {
    return Object.keys(INTERVAL_LABELS).map((keyItem) => {
      return (
        <div key={keyItem} className="intervalLabel">
          <p>{INTERVAL_LABELS[keyItem as keyof typeof INTERVAL_LABELS]}</p>
        </div>
      );
    });
  };

  const renderExerciseItems = () => {
    return myExercises.exercises.map(
      ({ id, name, memo, caloriesLost, duration }) => {
        return (
          <div key={id}>
            <div>
              <p>{`${name}(${memo})`}</p>
              <p>{`${formatNumber(caloriesLost, 2)}${UNIT_CALORIES}`}</p>
            </div>
            <div>{convertSecondToMinute(duration)}</div>
          </div>
        );
      }
    );
  };

  const renderDiaryItems = () => {
    return myDiaries
      .filter((_, index) => index < totalDiaries)
      .map((diary) => {
        return <DiaryItem key={diary.id} {...diary} />;
      });
  };

  return (
    <div className="myRecord">
      <div className="topicRecord">{renderRecordTopic()}</div>
      <div className="bodyRecord">
        <div className="bodyRecord__label">
          <p>{recordTopics[0]}</p>
          <p>{format(new Date(myBodyRecord.date), DATE_FORMAT.DEFAULT_DATE)}</p>
        </div>
        <div className="bodyRecord__chart">
          <LineChart options={CONFIG_LINE_CHART} data={dataChart} />
        </div>
        <div className="bodyRecord__interval">{renderIntervalLabel()}</div>
      </div>
      <div className="exerciseRecord">
        <div className="exerciseRecord__label">
          <p>{recordTopics[1]}</p>
          <p>{myExercises.date}</p>
        </div>
        <div className="exerciseRecord__list">{renderExerciseItems()}</div>
      </div>
      <div className="diaryRecord">
        <p>{recordTopics[2]}</p>
        <div className="diaryRecord__list">{renderDiaryItems()}</div>
      </div>
      {isShowLoadMore(myDiaries.length, totalDiaries) && (
        <Button
          label={LOAD_MORE.DIARY}
          action={() =>
            setTotalDiaries(
              (previousState) => previousState + LIMIT_ITEM_PER_PAGE
            )
          }
        />
      )}
    </div>
  );
};

export default MyRecordPage;
