import { useState } from "react";
import { useNavigate } from "react-router-dom";

import IconMemo from "assets/img/navigation/icon_memo.png";
import IconChallenge from "assets/img/navigation/icon_challenge.png";
import IconInfo from "assets/img/navigation/icon_info.png";
import IconMenu from "assets/img/navigation/icon_menu.png";
import Logo from "assets/img/navigation/logo.png";
import { ROUTES } from "constants/routes";

import HeaderMenu from "components/layout/HeaderMenu";
import { NAVIGATION_MENU } from "constants/common";

const Header = () => {
  const [isShowMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const navbarItems = [
    {
      title: NAVIGATION_MENU.MY_RECORDS,
      srcIcon: IconMemo,
      action: () => navigate(ROUTES.MY_RECORD),
    },
    {
      title: NAVIGATION_MENU.CHALLENGE,
      srcIcon: IconChallenge,
      action: () => navigate(ROUTES.DEVELOPMENT),
    },
    {
      title: NAVIGATION_MENU.NEWS,
      srcIcon: IconInfo,
      action: () => navigate(ROUTES.DEVELOPMENT),
    },
  ];
  const renderNavbar = () => {
    return navbarItems.map(({ action, srcIcon, title }) => {
      return (
        <div className="navbarItem" onClick={action} key={title}>
          <img src={srcIcon} alt="" />
          <p>{title}</p>
        </div>
      );
    });
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left" onClick={() => navigate(ROUTES.TOP)}>
          <img src={Logo} alt="Healthy" />
        </div>
        <div className="header__right">
          {renderNavbar()}
          <div className="navbarItem" onClick={() => setShowMenu(!isShowMenu)}>
            <img src={IconMenu} alt="Menu" />
            <HeaderMenu
              isShowMenu={isShowMenu}
              handleHideMenu={() => setShowMenu(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
