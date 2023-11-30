const { Job } = require("../models/jobModel");

const jobController = {
  //create job app.
  async createJob(req, res, next) {
    try {
      const { dateApplied, company, title, salary, status, link } = req.body;
      if (
        dateApplied.length &&
        company.length &&
        title.length &&
        status.length
      ) {
        const newJob = await Job.create({
          dateApplied,
          company,
          title,
          salary,
          status,
          link,
        });
        return next();
      } else {
        return next({
          log: "Error in the jobController.createJob",
          message: { err: "Error in creating new job application" },
          status: 400,
        });
      }
    } catch (error) {
      return next({
        log: `Error in the jobController.createJob: ${error}`,
        message: { err: "Error in creating new job application" },
        status: 500,
      });
    }
  },

  async updateStatus(req, res, next) {
    //update the status of the job.
    try {
      const jobId = req.params.id;
<<<<<<< HEAD
      const { status } = req.body;

      if (status.length) {
        const updatedJob = await Job.updateOne({ _id: jobId }, { status });
=======
      console.log("jobID: ", jobId);
      const { company, title, salary, status, link } = req.body;

      if (status.length) {
        const updatedJob = await Job.updateOne(
          { _id: jobId },
          { status }
        );
>>>>>>> d517e5152d8f1725f6f3fc916a5824be08048261
        return next();
      } else {
        return next({
          log: "Error in the jobController.updateStatus",
          message: { err: "Error occured in updating status" },
          status: 400,
        });
      }
    } catch (error) {
      return next({
        log: `Error in the jobController.updateStatus: ${error}`,
        message: { err: "Error occured: could not update status" },
        status: 500,
      });
    }
  },

  async deleteStatus(req, res, next) {
    try {
      const jobId = req.params.id;
      console.log(jobId);
      if (jobId) {
        const deletedJob = await Job.findByIdAndDelete(jobId);
        return next();
      } else {
        return next({
          log: "Error in the jobController.deleteStatus",
          message: { err: "Error occured in deleting job" },
          status: 400,
        });
      }
    } catch (error) {
      return next({
        log: `Error in the jobController.deleteStatus: ${error}`,
        message: { err: "Error occured in deleting job" },
        status: 500,
      });
    }
  },

  async syncData(req, res, next) {
    try {
<<<<<<< HEAD
      const allInterested = await Job.find({ status: 'Interested' });
      const allApplied = await Job.find({ status: 'Applied' });
      const allnterviewed = await Job.find({ status: 'Interviewed' });
      const allFollowedup = await Job.find({ status: 'FollowedUp' });
      const allRejected = await Job.find({ status: 'Rejected' });
      const allAccepted = await Job.find({ status: 'Accepted' });
=======
      const allInterested = await Job.find({ status: "Interested" });
      const allApplied = await Job.find({ status: "Applied" });
      const allnterviewed = await Job.find({ status: "Interviewed" });
      const allFollowedup = await Job.find({ status: "FollowedUp" });
      const allRejected = await Job.find({ status: "Rejected" });
      const allAccepted = await Job.find({ status: "Accepted" });
>>>>>>> d517e5152d8f1725f6f3fc916a5824be08048261

      let syncObject = {
        Interested: allInterested,
        Applied: allApplied,
        Interviewed: allnterviewed,
        FollowedUp: allFollowedup,
        Accepted: allAccepted,
        Rejected: allRejected,
      };

      res.locals.syncData = syncObject;
      return next();
    } catch (error) {
      return next({
        log: `Error in the jobController.syncData: ${error}`,
        message: { err: "Error occured in syncing" },
        status: 500,
      });
    }
  },
};

module.exports = jobController;
