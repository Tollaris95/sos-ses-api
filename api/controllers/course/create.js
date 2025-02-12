module.exports = {
    friendlyName: "Create course",
  
    description: "This action creates a new course in the database",
  
    inputs: {
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
    },
  
    fn: async function (inputs, exits, env) {
      try {
        // Création du document Course avec les 3 premiers champs uniquement
        const newCourse = await Course.create({
          matiere: inputs.matiere,
          classe: inputs.classe,
          chapitre: inputs.chapitre,
        })
        .fetch();
  
        // Retourner le cours créé avec un code HTTP 201 (création réussie)
        return env.res.status(201).json({
          message: "Course created successfully",
          course: newCourse,
        });
  
      } catch (error) {
        console.error("❌ Error creating course:", error);
        return env.res.status(500).json({
          message: "Error creating course",
          error: error.message,
        });
      }
    },
  };
  