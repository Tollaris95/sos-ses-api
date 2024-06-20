module.exports = {
    attributes: {
      question: {
        type: 'string',
        required: true,
      },
      answers: {
        type: 'json',
        required: true,
      },
      correctIndex: {
        type: 'number',
        required: true,
      },
    },
  };
  