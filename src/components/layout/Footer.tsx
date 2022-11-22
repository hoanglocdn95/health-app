const Footer = () => {
  const featureItems = [
    {
      title: '会員登録',
    },
    {
      title: '運営会社',
    },
    {
      title: '利用規約',
    },
    {
      title: '個人情報の取扱について',
    },
    {
      title: '特定商取引法に基づく表記',
    },
    {
      title: 'お問い合わせ',
    },
  ];
  const renderFeatureItems = () =>
    featureItems.map(({ title }) => <p key={title}>{title}</p>);
  return (
    <div className="footer">
      <div className="footer__container">{renderFeatureItems()}</div>
    </div>
  );
};

export default Footer;
