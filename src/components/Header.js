import React from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from 'carbon-components-react/lib/components/UIShell';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

const _Header = () => {
  return (
    <Header aria-label="OpenEEW">
      <HeaderName href="#" prefix="">
        OpenEEW
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
