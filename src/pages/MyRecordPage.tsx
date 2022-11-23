import { useState } from 'react';
import Button from 'components/common/Button';
import { LOAD_MORE, LIMIT_ITEM_PER_PAGE } from 'constants/common';
import { myDiaries } from 'dummyData/myRecord';
import { isShowLoadMore } from 'utils/common';

const MyRecordPage = () => {
  const [totalDiaries, setTotalDiaries] = useState(LIMIT_ITEM_PER_PAGE);
  return (
    <div className="myRecord">
      <div className="myRecord__list"></div>
      <div className="myRecord__body"></div>
      <div className="myRecord__exercise"></div>
      <div className="myRecord__diary">
        <p></p>
        <div className="diaryList"></div>
      </div>
      {isShowLoadMore(myDiaries.length, totalDiaries) && (
        <Button
          label={LOAD_MORE}
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
