const { Job } = require("../models/jobModel");

const jobController = {
  //create job app.
  async createJob(req, res, next) {
    try {
      const { user, company, title, salary, status, link } = req.body;
      console.log("user req body", user)
      if (
        company.length &&
        title.length &&
        status.length
      ) {
        const newJob = await Job.create({
          user,
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
      const { user, company, title, salary, status, link } = req.body;
      if (status.length) {
        const updatedJob = await Job.updateOne(
          { _id: jobId },
          { status }
        );
        return next();
      } else {
        return next({
          log: "Error in the jobController.updateStatus",
          message: { err: "Error occured in updating status" },
          status: 400,
        });
      }
    } catch (error) {
      console.error(error.message)
      return next({
        log: `Error in the jobController.updateStatus: ${error}`,
        message: { err: "Error occured in updating status" },
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
    console.log(req.query.id)
    const id = req.query.id
    
    try {
      const allInterested = await Job.find({ status: "Interested", user: id });
      const allApplied = await Job.find({ status: "Applied", user: id });
      const allnterviewed = await Job.find({ status: "Interviewed", user: id });
      const allFollowedup = await Job.find({ status: "FollowedUp", user: id });
      const allRejected = await Job.find({ status: "Rejected", user: id });
      const allAccepted = await Job.find({ status: "Accepted", user: id });

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
      console.error(error.message);
      return next({
        log: `Error in the jobController.syncData: ${error}`,
        message: { err: "Error occured in syncing" },
        status: 500,
      });
    }
  },
};

module.exports = jobController;
