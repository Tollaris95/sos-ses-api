module.exports = {
  migrate: "safe",
  attributes: {
    id: {
      type: "string",
      columnName: "_id",
    },
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
