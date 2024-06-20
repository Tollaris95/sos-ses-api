module.exports = {
    create: async function (req, res) {
      try {
        const { question, answers, correctIndex } = req.body;
        const exercise = await Exercise.create({ question, answers, correctIndex }).fetch();
        return res.status(201).json(exercise);
      } catch (error) {
        return res.status(500).json({ error: 'Unable to create exercise' });
      }
    },
  };
  