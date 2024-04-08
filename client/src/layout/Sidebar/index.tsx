import { FC } from 'react';
import './Sidebar.scss';
import { Settings } from 'lucide-react';
import { langConstants, useNavMenu } from './_constants';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-user">
        <img
          src="https://cdn0-production-images-kly.akamaized.net/fjYp40-Q94lnHsapJTj_FPnmpck=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2377213/original/046581900_1538977000-Mark_Zuckerberg.jpg"
          alt="user image"
        />
        <div className="sidebar-user__setting	d-flex button-round">
          <Settings />
        </div>
      </div>
      <div className="d-flex sidebar-language">
        {langConstants.map((e) => (
          <button onClick={() => changeLanguage(e)} key={e} className={i18n.language === e ? 'active' : ''}>
            {e}
          </button>
        ))}
      </div>
      <nav className="sidebar-menu">
        {useNavMenu().map((e) => (
          <NavLink to={e.url} className="menu-link" key={e.url}>
            {e.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
