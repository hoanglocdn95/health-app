import { useNavigate } from 'react-router-dom';

import IconClose from 'assets/img/navigation/icon_close.png';
import { ROUTES } from 'constants/routes';

type Props = {
  isShowMenu: boolean;
  handleHideMenu: () => void;
};

const HeaderMenu = ({ isShowMenu, handleHideMenu }: Props) => {
  const navigate = useNavigate();
  const menuItems = [
    {
      title: '自分の記録',
      action: () => navigate(ROUTES.MY_RECORD),
    },
    {
      title: '体重グラフ',
      action: () => navigate(ROUTES.DEVELOPMENT),
    },
    {
      title: '目標',
      action: () => navigate(ROUTES.DEVELOPMENT),
    },
    {
      title: '選択中のコース',
      action: () => navigate(ROUTES.DEVELOPMENT),
    },
    {
      title: 'コラム一覧',
      action: () => navigate(ROUTES.COLUMN),
    },
    {
      title: '設定',
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
