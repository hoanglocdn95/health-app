import format from 'date-fns/format';

import { DATE_FORMAT } from 'constants/common';
import { DiaryType } from 'types/myRecord.type';

const DiaryItem = ({ date, content }: DiaryType) => {
  return (
    <div className="diaryRecord__item">
      <div>
        <div className="diaryRecord__date">
          <p>{format(new Date(date), DATE_FORMAT.DEFAULT_DATE)}</p>
          <p>{format(new Date(date), DATE_FORMAT.DEFAULT_TIME)}</p>
        </div>
        <p className="diaryRecord__content">{content}</p>
      </div>
    </div>
  );
};

export default DiaryItem;
