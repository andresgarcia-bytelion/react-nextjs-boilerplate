import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Nav from '@/components/nav';
import theme from '@/lib/theme';
import usePosts from '@/data/posts';

const menuStyles = makeStyles({
  root: {
    height: '100%',
    width: 300,
    padding: theme.spacing(2, 0),
  },
});

const Menu = () => {
  const { posts } = usePosts();
  const menuClasses = menuStyles();

  return (
    <Grid
      className={menuClasses.root}
      container
      direction="column"
      justifyContent="space-between"
      py={2}
    >
      <h2>Past Posts</h2>
      {
        posts &&
        posts.response &&
        posts.response.map((post, index) => {
          const currDate = new Date(post.timestamp);
          const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(currDate);
          const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(currDate);
          const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currDate);
          const readableDate = `${month}-${day}-${year}`;
          return (
            <Nav
              key={post.id}
              items={[
                {
                  href: `#${post.id}`,
                  primary: `${readableDate} - Post ${index + 1}`,
                },
              ]}
            />
          );
        })
      }
      <Box px={2}>
        <Typography variant="caption">
          {`© ${new Date().getFullYear()} Bytelion. Copyright.`}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Menu;
