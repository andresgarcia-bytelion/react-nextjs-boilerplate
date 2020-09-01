---
to: src/components/<%=name%>/main.js
---
/* eslint-disable react/jsx-props-no-spreading */
/* necessary disable line to allow for easier, more dynamic usage of material ui */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import <%=mui%> from '@material-ui/core/<%=mui%>';
import theme from 'components/theme';

const Custom<%=Name%> = (props) => {
  const { children } = props;

  const classes = makeStyles({
    root: {}
  })();

  return (
    <<%=mui%>
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </<%=mui%>>
  );
};

export default Custom<%=Name%>;
