import { HashtagType, RecommendType } from "types/column.type";

const RecommendItem = ({
  id,
  date,
  content,
  hashtags,
  illustrationSrc,
}: RecommendType) => {
  const renderHashtag = (hashtags: HashtagType[]) => {
    return hashtags.map((item) => {
      return (
        <a key={item.tag} href={item.link}>
          #{item.tag}
        </a>
      );
    });
  };
  return (
    <div className="recommendList__item">
      <div
        className="recommendList__bg"
        style={{
          backgroundImage: `url(${illustrationSrc})`,
        }}
      >
        <p>{date}</p>
      </div>
      <div className="recommendList__content">{content}</div>
      <div className="recommendList__hashtag">{renderHashtag(hashtags)}</div>
    </div>
  );
};

export default RecommendItem;
