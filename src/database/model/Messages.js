import { DataTypes } from "sequelize";
import { PostgresConnection } from "../connection";
import User from "./User";

const Messages = PostgresConnection.define(
  "Messages",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      //   unique: true,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      //   unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    underscored: true,
    paranoid: true,
    timestamps: true,
  }
);

Messages.belongsTo(User, {
  foreignKey: "owner",
});

export default Messages;
