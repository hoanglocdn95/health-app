import { DATE_FORMAT } from 'constants/common';
import format from 'date-fns/format';
import { HashtagType, RecommendType } from 'types/column.type';

const RecommendItem = ({
  date,
  content,
  hashtags,
  illustrationSrc,
}: RecommendType) => {
  const renderHashtag = (hashtags: HashtagType[]) => {
    return hashtags.map((item) => {
      return <p key={item.tag}>#{item.tag}</p>;
    });
  };
  return (
    <div className="recommendList__item">
      <div className="recommendList__content">
        <div
          className="recommendList__bg"
          style={{
            backgroundImage: `url(${illustrationSrc})`,
          }}
        >
          <div>
            <p>{format(new Date(date), DATE_FORMAT.RECOMMEND_DATE)}</p>
            <p>{format(new Date(date), DATE_FORMAT.RECOMMEND_TIME)}</p>
          </div>
        </div>
        <div className="recommendList__description">{content}</div>
        <div className="recommendList__hashtag">{renderHashtag(hashtags)}</div>
      </div>
    </div>
  );
};

export default RecommendItem;
