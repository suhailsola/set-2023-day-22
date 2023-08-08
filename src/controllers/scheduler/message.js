import { CronJob } from "cron";
import Messages from "../../database/model/Messages";
import { Op } from "sequelize";

export async function sendAnnualMessage(req, res) {
  const today = new Date();
  const lastYear = new Date(today);
  lastYear.setFullYear(today.getFullYear() - 1);

  const startOfLastYear = new Date(lastYear);
  startOfLastYear.setHours(0, 0, 0, 0);

  const messages = await Messages.findAll({
    where: {
      created_at: {
        [Op.gte]: startOfLastYear,
        [Op.lt]: lastYear,
      },
    },
  })
    .then((value) =>
      console.log({ data: value.map((item) => item.dataValues) })
    )
    .catch((error) => console.log(error));
}

const sendAnnualMessageJob = new CronJob(
  "* * * * *",
  function () {
    try {
      sendAnnualMessage();
    } catch (error) {
      console.log("You will see this message every second");
    }
  },
  null,
  true,
  "Asia/Kuala_Lumpur"
);

export default sendAnnualMessageJob;
