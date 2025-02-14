module.exports = {
    friendlyName: "Update course",
  
    description: "This action updates an existing course in the database",
  
    inputs: {
      id: {
        type: "string",
        required: true,
      },
      contenu: {
        type: "json",
        required: true,
      },
    },
  
    fn: async function (inputs, exits, env) {
      console.log("🚀 ~ inputs:", inputs)
      try {
        // Vérification de l'existence du cours
        const existingCourse = await Course.findOne({ id: inputs.id });
        if (!existingCourse) {
          return env.res.status(404).json({
            message: "Course not found",
          });
        }
  
        // Mise à jour du cours avec les nouvelles données
        const updatedCourse = await Course.updateOne({ id: inputs.id })
          .set(inputs.contenu);
  
        if (!updatedCourse) {
          return env.res.status(500).json({
            message: "Failed to update course",
          });
        }
  
        // Retourner la mise à jour réussie avec un code HTTP 200
        return env.res.status(200).json({
          message: "Course updated successfully",
          course: updatedCourse,
        });
      } catch (error) {
        console.error("❌ Error updating course:", error);
        return env.res.status(500).json({
          message: "Error updating course",
          error: error.message,
        });
      }
    },
  };
  