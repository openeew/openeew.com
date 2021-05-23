import React, { useContext } from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from 'carbon-components-react/lib/components/UIShell';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

import AppContext from '../context/app';

const _Header = () => {
  const { t } = useContext(AppContext);

  return (
    <Header aria-label="OpenEEW" className="header--container">
      <HeaderName href="#" prefix="">
        {t('title')}
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Dashboard" tooltipAlignment="end">
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default _Header;
