import { Router } from "express";
import { NOW, Op } from "sequelize";
import Messages from "../database/model/Messages";
import { CronJob } from "cron";

export const apiRoutes = Router();

apiRoutes.get("/messages");


