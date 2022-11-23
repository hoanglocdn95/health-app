import { useState } from "react";
import {
  LIMIT_ITEM_PER_PAGE,
  LOAD_MORE,
  RECOMMEND_TOPIC,
} from "constants/common";
import { recommendItems } from "dummyData/columnList";
import RecommendItem from "./RecommendItem";
import Button from "components/common/Button";
import { isShowLoadMore } from "utils/common";

const ColumnPage = () => {
  const [totalRecommend, setTotalRecommend] =
    useState<number>(LIMIT_ITEM_PER_PAGE);
  const renderRecommendTopic = () => {
    return Object.keys(RECOMMEND_TOPIC).map((keyItem) => {
      return (
        <div key={keyItem} className="recommendTopic__item">
          <p>RECOMMENDED {keyItem}</p>
          <hr />
          <p>{RECOMMEND_TOPIC[keyItem as keyof typeof RECOMMEND_TOPIC]}</p>
        </div>
      );
    });
  };
  const renderRecommendList = () => {
    return recommendItems.map((item) => (
      <RecommendItem key={item.id} {...item} />
    ));
  };
  return (
    <div className="columnPage">
      <div className="recommendTopic">{renderRecommendTopic()}</div>
      <div className="recommendList">{renderRecommendList()}</div>
      {isShowLoadMore(recommendItems.length, totalRecommend) && (
        <Button
          label={LOAD_MORE.RECORD}
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
