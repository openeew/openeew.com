import React, { useContext } from 'react';
import diagram from '../content/assets/openeew-diagram2.jpg';

import AppContext from '../context/app';

const Banner = () => {
  const { t } = useContext(AppContext);

  return (
    <div className="landing__diagram">
      <img src={diagram} alt="" />
    </div>
  );
};

export default Banner;
