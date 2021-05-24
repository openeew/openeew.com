import React, { useContext } from 'react';
import { Grid, Row, Column, Button, ButtonSet } from 'carbon-components-react';
import ArrowDown from '@carbon/icons-react/lib/arrow--down/32';
import AppContext from '../context/app';

const WhoWeAre = () => {
  const { t } = useContext(AppContext);

  return (
    <Grid className="landing__whoWeAre">
      <Row>
        <Column lg={9}>
          <h2>{t('informationTitle')}</h2>
          <p>{t('informationFirstPara')}</p>
          <p>{t('informationSecPara')}</p>
          <ButtonSet className="landing__buttonSet">
            <Button
              kind="primary"
              target="_blank"
              href="https://dashboard.openeew.com"
            >
              {t('whatopeneewButtonPrimary')}
            </Button>
            <Button
              kind="tertiary"
              target="_blank"
              href="https://openeew.slack.com/"
            >
              {t('whatopeneewButton2')}
            </Button>
            <Button
              kind="tertiary"
              target="_blank"
              href="https://github.com/openeew"
            >
              {t('whatopeneewButton3')}
            </Button>
          </ButtonSet>
          <ArrowDown />
        </Column>
      </Row>
    </Grid>
  );
};

export default WhoWeAre;
