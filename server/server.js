const path = require('path');
const express = require('express');

const jobController = require('./controllers/jobController');

const app = express();
const PORT = 3000;
// parse JSON incoming
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const jobsRouter = express.Router();
app.use('/api/job-card', jobsRouter);
app.use(express.static(path.resolve(__dirname, '../build')));

//Sync data to redux store
jobsRouter.get('/data', jobController.syncData, (req, res) => {
  return res.status(200).json(res.locals.syncData);
});

//Creating job in database
jobsRouter.post('/', jobController.createJob, (req, res) => {
  return res.status(200).redirect('/');
});

//Updating job in database
jobsRouter.patch('/:id', jobController.updateStatus, (req, res) => {
  return res.status(200).redirect('/');
});

//Deleting job in database
jobsRouter.delete('/:id', jobController.deleteStatus, (req, res) => {
  return res.status(200).redirect('/');
});
app.use((req, res) => res.status(404).send('Page Not Found'));

//Global error Handle
jobsRouter.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
