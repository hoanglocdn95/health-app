import { DiaryType } from "types/myRecord.type";

const DiaryItem = ({ date, content }: DiaryType) => {
  return (
    <div className="diaryRecord__item">
      <p className="diaryRecord__content diaryRecord__item--big"></p>
      <p className="diaryRecord__content diaryRecord__item--big"></p>
      <p className="diaryRecord__content diaryRecord__item--long">{content}</p>
    </div>
  );
};

export default DiaryItem;
