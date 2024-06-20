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
    correctIndices: {
      type: 'json',
      required: true,
      description: 'Indices des réponses correctes sous forme de tableau de nombres',
    },
    chapitre: {
      model: 'chapitre',
      required: true,
      description: 'Le chapitre auquel la question appartient',
    },
  },
};
