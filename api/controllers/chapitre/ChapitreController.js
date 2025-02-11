module.exports = {
    // Méthode pour créer un chapitre
    create: async function(req, res) {
      try {
        const { name } = req.body;
        if (!name) {
          return res.badRequest({ error: 'Le nom du chapitre est requis' });
        }
        const chapitre = await Chapitre.create({ name }).fetch();
        return res.status(201).json(chapitre);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    // Méthode pour mettre à jour un chapitre
    update: async function(req, res) {
      try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name) {
          return res.badRequest({ error: 'Le nom du chapitre est requis' });
        }
        const chapitre = await Chapitre.updateOne({ id }).set({ name });
        if (!chapitre) {
          return res.notFound({ error: 'chapitre non trouvé' });
        }
        return res.json(chapitre);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    // Méthode pour supprimer un chapitre
    delete: async function(req, res) {
      try {
        const { id } = req.params;
        const chapitre = await Chapitre.destroyOne({ id });
        if (!chapitre) {
          return res.notFound({ error: 'chapitre non trouvé' });
        }
        return res.json({ message: 'chapitre supprimé avec succès' });
      } catch (err) {
        return res.serverError(err);
      }
    }
  };
  