module.exports = {
    friendlyName: "Find one course",
  
    description: "This action retrieves a specific course by its ID and returns all its content",
  
    inputs: {
      id: {
        type: "string",
        required: true,
      },
    },
  
    fn: async function (inputs, exits, env) {
      try {
        // Recherche du cours par ID
        const course = await Course.findOne({ id: inputs.id });
        
        if (!course) {
          return env.res.status(404).json({
            message: "Course not found",
          });
        }
  
        // Retourner le cours trouvé
        return env.res.status(200).json({
          message: "Course retrieved successfully",
          course,
        });
      } catch (error) {
        console.error("❌ Error retrieving course:", error);
        return env.res.status(500).json({
          message: "Error retrieving course",
          error: error.message,
        });
      }
    },
  };
  