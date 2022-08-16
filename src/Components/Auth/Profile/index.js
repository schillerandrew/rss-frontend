import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  img: {
    // assign ref to element
    ref: getRef('img'),
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  p: {
    //   // assign ref to element
    ref: getRef('p'),
    // color: theme.colors.blue[6],
    fontSize: 12,
    maxWidth: '100%',
  },
}));

const Profile = () => {
  const { classes } = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img className={classes.img} src={user.picture} alt={user.name} />
        <p className={classes.p}>
          <strong>{user.name}</strong>
        </p>
        <p className={classes.p}>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
