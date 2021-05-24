import React, { useContext } from 'react';
import { Grid, Row, Column } from 'carbon-components-react';
import ArrowDown from '@carbon/icons-react/lib/arrow--down/32';
import AppContext from '../context/app';

const WhoWeAre = () => {
  const { t } = useContext(AppContext);

  return (
    <Grid className="landing__whoWeAre">
      <Row>
        <Column lg={7}>
          <h2>{t('informationTitle')}</h2>
          <p>{t('informationFirstPara')}</p>
          <p>{t('informationSecPara')}</p>
          <ArrowDown />
        </Column>
      </Row>
    </Grid>
  );
};

export default WhoWeAre;
