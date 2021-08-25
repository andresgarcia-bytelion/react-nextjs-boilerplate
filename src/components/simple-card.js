import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { random } from 'lodash';
import useApi from '@/data/testApi';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = ({ user }) => {
  const { response } = useApi();
  const classes = useStyles();
  const { nameFirst, nameLast, id } = user;
  const randomLevel = random(1, 10);
  const router = useRouter();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {`${nameFirst} ${nameLast}`}
        </Typography>
        <Typography variant="h5" component="h2">
          {`Level ${randomLevel} Coder`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Test Title
        </Typography>
        <Typography variant="body2" component="p">
          {response && response.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { router.push(`/user/${id}`); }}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
