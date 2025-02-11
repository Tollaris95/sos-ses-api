module.exports = {
  migrate: "safe",
  attributes: {
    attributes: {
      id: {
        type: "string",
        columnName: "_id",
      },
    },
    primaryKey: "id",
    username: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
};
