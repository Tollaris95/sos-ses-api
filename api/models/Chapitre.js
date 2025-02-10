module.exports = {
  migrate: "safe",
  attributes: {
    id: {
      type: "string",
      columnName: "_id",
    },
    name: {
      type: "string",
      required: true,
      unique: true,
    },
  },
};
