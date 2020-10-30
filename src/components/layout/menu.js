import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Nav from '@/components/nav';

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const Menu = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      py={2}
    >
      <Nav
        items={[
          {
            href: '/',
            primary: 'Home',
          },
        ]}
      />
      <Box px={2}>
        <Typography variant="caption">
          {`© ${new Date().getFullYear()} Bytelion. Copyright.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Menu;
