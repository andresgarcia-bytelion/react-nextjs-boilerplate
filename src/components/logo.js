import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Brand from '@/icons/brand.svg';

const svgIconStyles = makeStyles({
  root: {
    width: 40,
    height: 40,
    display: 'block',
  },
});

const CustomLogo = () => {
  const svgIconClasses = svgIconStyles();

  return (
    <NextLink href="/">
      <MuiLink>
        <SvgIcon
          className={svgIconClasses.root}
          component={Brand}
          viewBox="0 0 60 60"
        />
      </MuiLink>
    </NextLink>
  );
};

export default CustomLogo;
