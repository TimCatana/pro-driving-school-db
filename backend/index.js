const app = require('./app');
// const domain = require( './domain'); For env vars later on

app.listen(4400, () => {
  console.log(`Listening on port http://localhost:4400...`);
});
