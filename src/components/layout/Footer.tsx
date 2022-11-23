import { FOOTER_FEATURES } from "constants/common";

const Footer = () => {
  const featureItems = [
    {
      title: FOOTER_FEATURES.REGISTRATION,
      action: () => {},
    },
    {
      title: FOOTER_FEATURES.OPERATING_COMPANY,
      action: () => {},
    },
    {
      title: FOOTER_FEATURES.TERMS,
      action: () => {},
    },
    {
      title: FOOTER_FEATURES.HANDLE_PERSONAL_INFORMATION,
      action: () => {},
    },
    {
      title: FOOTER_FEATURES.SPECIFIED_COMMERCIAL_TRANSACTION,
      action: () => {},
    },
    {
      title: FOOTER_FEATURES.CONTACT_US,
      action: () => {},
    },
  ];
  const renderFeatureItems = () =>
    featureItems.map(({ title, action }) => (
      <p onClick={action} key={title}>
        {title}
      </p>
    ));
  return (
    <div className="footer">
      <div className="footer__container">{renderFeatureItems()}</div>
    </div>
  );
};

export default Footer;
