module.exports = {
  // Méthode pour créer un exercice
  create: async function(req, res) {
    try {
      const { question, answers, correctIndices, chapitre } = req.body;
      if (!question || !answers || !correctIndices || !chapitre) {
        return res.badRequest({ error: 'Toutes les informations sont requises' });
      }
      const exercice = await Exercice.create({ question, answers, correctIndices, chapitre }).fetch();
      return res.status(201).json(exercice);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Méthode pour récupérer tous les exercices
  find: async function(req, res) {
    try {
      const exercices = await Exercice.find().populate('chapitre');
      return res.json(exercices);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Méthode pour mettre à jour un exercice
  update: async function(req, res) {
    try {
      const { id } = req.params;
      const { question, answers, correctIndices, chapitre } = req.body;
      if (!question || !answers || !correctIndices || !chapitre) {
        return res.badRequest({ error: 'Toutes les informations sont requises' });
      }
      const exercice = await Exercice.updateOne({ id }).set({ question, answers, correctIndices, chapitre });
      if (!exercice) {
        return res.notFound({ error: 'Exercice non trouvé' });
      }
      return res.json(exercice);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Méthode pour supprimer un exercice
  delete: async function(req, res) {
    try {
      const { id } = req.params;
      const exercice = await Exercice.destroyOne({ id });
      if (!exercice) {
        return res.notFound({ error: 'Exercice non trouvé' });
      }
      return res.json({ message: 'Exercice supprimé avec succès' });
    } catch (err) {
      return res.serverError(err);
    }
  }
};
