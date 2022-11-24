import { useState } from 'react';
import Button from 'components/common/Button';
import {
  RECORD_TOPICS,
  LOAD_MORE,
  LIMIT_ITEM_PER_PAGE,
} from 'constants/common';
import { myDiaries } from 'dummyData/myRecord';
import { isShowLoadMore } from 'utils/common';
import MyRecommend1 from 'assets/img/myRecord/myRecommend_1.jpg';
import MyRecommend2 from 'assets/img/myRecord/myRecommend_2.jpg';
import MyRecommend3 from 'assets/img/myRecord/myRecommend_3.jpg';

const bgRecommend = [MyRecommend1, MyRecommend2, MyRecommend3];

const MyRecordPage = () => {
  const [totalDiaries, setTotalDiaries] = useState<number>(LIMIT_ITEM_PER_PAGE);

  const renderRecordTopic = () => {
    return Object.keys(RECORD_TOPICS).map((keyItem, index) => {
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
  return (
    <div className="myRecord">
      <div className="topicRecord">{renderRecordTopic()}</div>
      <div className="bodyRecord">
        <div className="bodyRecord__label">
          <p>BODY RECORD</p>
          <p>2021.05.21</p>
        </div>
        <div className="bodyRecord__chart"></div>
        <div className="bodyRecord__interval"></div>
      </div>
      <div className="exerciseRecord"></div>
      <div className="diaryRecord">
        <p></p>
        <div className="diaryRecord__list"></div>
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
