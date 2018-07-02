import authReducers from '../../reducers/auth';

test('should set correctly reflect default login state', () => {
  const state = authReducers(undefined, { type: 'LOGIN' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'ddgilli'
  }
  const state = authReducers({} , action);
  expect(state.uid).toEqual(action.uid);
});

test('should clear uid for logout', () => {
  const currentLogin = {
    type: 'LOGIN',
    uid: 'ddgilli'
  }
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducers({currentLogin} , action);
  expect(state).toEqual({});
});

