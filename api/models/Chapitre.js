module.exports = {
    attributes: {
      name: {
        type: 'string',
        required: true,
        unique: true,
      },
      questions: {
        collection: 'question',
        via: 'chapitre',
      },
    },
  };
  