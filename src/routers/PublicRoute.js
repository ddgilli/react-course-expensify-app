import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/*  
* This class basically wraps around the Route class but allows us
* to add conditional logic to our navigation.
*/
export const PublicRoute = ({
  isAuthenticated, 
  component: Component,
  ...rest //gives us access to the rest of props - can call it anything
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Redirect to="/dashboard" /> //not authenticated, send to login page
      ) : (
        <Component {...props} /> 
      )
  )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid //now returns true or false
});

export default connect(mapStateToProps)(PublicRoute);