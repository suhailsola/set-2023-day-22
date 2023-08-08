import sendAnnualMessageJob from "../controllers/scheduler/message";

function cronInit() {
  sendAnnualMessageJob.start();
  // add more scheduler
}

export default cronInit;
