import { useNavigate } from "react-router-dom";

import IconClose from "assets/img/navigation/icon_close.png";
import { NAVIGATION_MENU } from "constants/common";
import { ROUTES } from "constants/routes";

type Props = {
  isShowMenu: boolean;
  handleHideMenu: () => void;
};

const HeaderMenu = ({ isShowMenu, handleHideMenu }: Props) => {
  const navigate = useNavigate();
  const menuItems = [
    {
      title: NAVIGATION_MENU.MY_RECORDS,
      action: () => navigate(ROUTES.MY_RECORD),
    },
    {
      title: NAVIGATION_MENU.WEIGHT_CHART,
      action: () => navigate(ROUTES.DEVELOPMENT),
    },
    {
      title: NAVIGATION_MENU.GOAL,
      action: () => navigate(ROUTES.DEVELOPMENT),
    },
    {
      title: NAVIGATION_MENU.SELECTED_COURSE,
      action: () => navigate(ROUTES.DEVELOPMENT),
    },
    {
      title: NAVIGATION_MENU.COLUMN_LIST,
      action: () => navigate(ROUTES.COLUMN),
    },
    {
      title: NAVIGATION_MENU.SETTINGS,
      action: () => navigate(ROUTES.DEVELOPMENT),
    },
  ];
  const renderItems = () => {
    return menuItems.map(({ action, title }) => {
      return (
        <div className="menu__item" onClick={action} key={title}>
          <p>{title}</p>
        </div>
      );
    });
  };

  return isShowMenu ? (
    <div className="menu">
      <div className="menu__close" onClick={handleHideMenu}>
        <img src={IconClose} alt="X" />
      </div>
      {renderItems()}
    </div>
  ) : null;
};

export default HeaderMenu;
