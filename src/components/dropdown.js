import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import theme from '@/lib/theme';

const useStyles = makeStyles({
  paper: {
    border: `1px solid ${theme.palette.grays.default}`,
    borderRadius: 0,
    boxShadow: 'none',
    marginTop: theme.spacing(1),
  },
  list: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
});

const CustomMenu = ({
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Menu
      classes={{
        paper: classes.paper,
        list: classes.list,
      }}
      getContentAnchorEl={null}
      keepMounted
      {...rest}
    >
      {children}
    </Menu>
  );
};

export default CustomMenu;
