import { UNIT_CALORIES } from 'constants/common';
import { ExerciseType } from 'types/myRecord.type';
import { formatNumber, convertSecondToMinute } from 'utils/common';

const ExerciseItem = ({ name, memo, caloriesLost, duration }: ExerciseType) => {
  return (
    <div className="exerciseRecord__item">
      <div className="exerciseRecord__content">
        <div>{`${name}(${memo})`}</div>
        <p>{`${formatNumber(caloriesLost, 2)}${UNIT_CALORIES}`}</p>
      </div>
      <div className="exerciseRecord__duration">
        {convertSecondToMinute(duration)}
      </div>
    </div>
  );
};

export default ExerciseItem;
