import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import desktop from '../../assets/images/desktop.svg';

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    background: 'linear-gradient(to right top, #48BFE3, #56CFE1)',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    margin: '5rem',
    borderRadius: '2rem',
    padding: '2rem',
    zIndex: 2,
  },
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  svg: {
    height: '200px',
    marginBottom: '2rem',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.welcome}>
          <img
            className={classes.svg}
            src={desktop}
            alt="Desktop on a decorated table."
          />
          <Typography variant="title" component="h3">
            Seu projeto foi criado com sucesso.
          </Typography>
          <Typography variant="body2" component="p">
            Acesse a pasta <b>/pages</b> para editar este conteúdo.
          </Typography>
        </div>

        <Grid container />
      </div>
    </div>
  );
};

export default Home;
