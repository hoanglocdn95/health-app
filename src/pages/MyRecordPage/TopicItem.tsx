interface Props {
  topic: string;
  srcImg: string;
  note: string;
}

const TopicItem = ({ topic, srcImg, note }: Props) => {
  return (
    <div className="topicRecord__item">
      <div className="topicRecord__content">
        <div
          style={{
            backgroundImage: `url(${srcImg})`,
          }}
        />
        <p>{topic}</p>
        <div className="topicRecord__note">
          <p>{note}</p>
        </div>
      </div>
    </div>
  );
};

export default TopicItem;
