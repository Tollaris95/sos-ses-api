module.exports = {
    friendlyName: "Get all courses",
  
    description: "This action retrieves all courses with only their titles and IDs",
  
    fn: async function (_, exits, env) {
      try {
        // Récupération de tous les cours avec uniquement leur id et titre
        const courses = await Course.find({
          select: ["id", "titre"],
        });
  
        // Retourner la liste des cours
        return env.res.status(200).json({
          message: "Courses retrieved successfully",
          courses,
        });
      } catch (error) {
        console.error("❌ Error retrieving courses:", error);
        return env.res.status(500).json({
          message: "Error retrieving courses",
          error: error.message,
        });
      }
    },
  };
  