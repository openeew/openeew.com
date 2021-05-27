import React, { useContext } from 'react';
import AppContext from '../context/app';

const Footer = (props) => {
  const { t } = useContext(AppContext);

  return (
    <footer>
      <h4>
        {t('footer')}
        <a
          href="https://www.linuxfoundation.org/projects/call-for-code/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {t('footerLink')}
        </a>
      </h4>
      <p>{t('copyright')}</p>
      <small>{t('copyrightInfo')}</small>
    </footer>
  );
};

export default Footer;
