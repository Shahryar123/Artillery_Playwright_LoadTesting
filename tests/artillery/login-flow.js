const { testLoginFlow } = require('../commands/login-flow');

async function artilleryTest(page) {
  await testLoginFlow(page);
}

module.exports = {
  artilleryTest
};
