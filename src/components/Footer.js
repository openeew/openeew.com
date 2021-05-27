import React, { useContext } from 'react';
import AppContext from '../context/app';

const Footer = (props) => {
  const { t } = useContext(AppContext);

  return <footer></footer>;
};

export default Footer;
