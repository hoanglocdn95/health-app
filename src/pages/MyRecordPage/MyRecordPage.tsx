import { useState } from 'react';
import format from 'date-fns/format';

import {
  RECORD_TOPICS,
  LOAD_MORE,
  LIMIT_ITEM_PER_PAGE,
  CONFIG_LINE_CHART,
  INTERVAL_LABELS,
  DATE_FORMAT,
  UNIT_CALORIES,
} from 'constants/common';
import Button from 'components/common/Button';
import LineChart from 'components/common/LineChart';
import DiaryItem from 'pages/MyRecordPage/DiaryItem';
import TopicItem from 'pages/MyRecordPage/TopicItem';
import ExerciseItem from 'pages/MyRecordPage/ExerciseItem';
import {
  convertSecondToMinute,
  isShowLoadMore,
  formatNumber,
} from 'utils/common';

import { dataChart } from 'dummyData/fakeData';
import { myBodyRecord, myExercises, myDiaries } from 'dummyData/myRecord';
import MyRecommend1 from 'assets/img/myRecord/myRecommend_1.jpg';
import MyRecommend2 from 'assets/img/myRecord/myRecommend_2.jpg';
import MyRecommend3 from 'assets/img/myRecord/myRecommend_3.jpg';

const bgRecommend = [MyRecommend1, MyRecommend2, MyRecommend3];

const MyRecordPage = () => {
  const [totalDiaries, setTotalDiaries] = useState<number>(LIMIT_ITEM_PER_PAGE);
  const recordTopics = Object.keys(RECORD_TOPICS);

  const renderRecordTopic = () => {
    return recordTopics.map((keyItem, index) => {
      return (
        <TopicItem
          key={keyItem}
          topic={keyItem}
          note={RECORD_TOPICS[keyItem as keyof typeof RECORD_TOPICS]}
          srcImg={bgRecommend[index]}
        />
      );
    });
  };

  const renderIntervalLabel = () => {
    const activeLabelIndex = 3;
    return Object.keys(INTERVAL_LABELS).map((keyItem, index) => {
      return (
        <div
          key={keyItem}
          className={`intervalLabel ${
            index === activeLabelIndex ? 'intervalLabel--active' : ''
          }`}
        >
          <p>{INTERVAL_LABELS[keyItem as keyof typeof INTERVAL_LABELS]}</p>
        </div>
      );
    });
  };

  const renderExerciseItems = () => {
    const exercises = [
      ...myExercises.exercises,
      ...myExercises.exercises,
      ...myExercises.exercises,
      ...myExercises.exercises,
    ];
    return exercises.map((exercise) => {
      return <ExerciseItem key={exercise.id} {...exercise} />;
    });
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
          <p>{format(new Date(myExercises.date), DATE_FORMAT.DEFAULT_DATE)}</p>
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
