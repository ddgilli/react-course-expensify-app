import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

/*  
* This class basically wraps around the Route class but allows us
* to add conditional logic to our navigation.
*/
export const PrivateRoute = ({
  isAuthenticated, 
  component: Component,
  ...rest //gives us access to the rest of props - can call it anything
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props} />
        </div>
      ) : (
          <Redirect to="/" /> //not authenticated, send to login page
        )
  )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid //now returns true or false
});

export default connect(mapStateToProps)(PrivateRoute);