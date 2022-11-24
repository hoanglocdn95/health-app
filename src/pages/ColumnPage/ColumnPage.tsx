import { useState, useEffect } from 'react';
import {
  LIMIT_ITEM_PER_PAGE,
  LOAD_MORE,
  RECOMMEND_TOPIC,
} from 'constants/common';
import { recommendItems } from 'dummyData/columnList';
import RecommendItem from './RecommendItem';
import Button from 'components/common/Button';
import { isShowLoadMore } from 'utils/common';

const ColumnPage = () => {
  const [totalRecommend, setTotalRecommend] =
    useState<number>(LIMIT_ITEM_PER_PAGE);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderRecommendTopic = () => {
    return Object.keys(RECOMMEND_TOPIC).map((keyItem) => {
      return (
        <div key={keyItem} className="recommendTopic__item">
          <div className="recommendTopic__content">
            <p>RECOMMENDED {keyItem}</p>
            <hr />
            <p>{RECOMMEND_TOPIC[keyItem as keyof typeof RECOMMEND_TOPIC]}</p>
          </div>
        </div>
      );
    });
  };

  const renderRecommendList = () => {
    return recommendItems
      .filter((_, index) => index < totalRecommend)
      .map((item) => <RecommendItem key={item.id} {...item} />);
  };
  return (
    <div className="columnPage">
      <div className="recommendTopic">{renderRecommendTopic()}</div>
      <div className="recommendList">{renderRecommendList()}</div>
      {isShowLoadMore(recommendItems.length, totalRecommend) && (
        <Button
          label={LOAD_MORE.COLUMN}
          action={() =>
            setTotalRecommend(
              (previousState) => previousState + LIMIT_ITEM_PER_PAGE
            )
          }
        />
      )}
    </div>
  );
};

export default ColumnPage;
