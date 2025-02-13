module.exports = {
  migrate: "safe",

  attributes: {
    id: {
      type: "string",
      columnName: "_id",
    },
    matiere: {
      type: "string",
      required: true,
    },
    classe: {
      type: "string",
      required: true,
    },
    chapitre: {
      type: "string",
      required: true,
    },
    contenu: {
        type: "json",
        required: false,
      },
  },

  primaryKey: "id",
  datastore: "default",
};
