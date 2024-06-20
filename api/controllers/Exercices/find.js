module.exports = {
  async function(req, res) {
    try {
      const exercises = await Exercise.find();
      return res.status(200).json(exercises);
    } catch (error) {
      return res.status(500).json({ error: "Unable to fetch exercises" });
    }
  },
};
