//This is a mock class so we can use a static value for
//moment in our tests and have the snapshots match.

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};
