const projectController = require('../controllers/project.controllers');

module.exports = (app) => {
    app.post("/api/projects", projectController.createProject);
    app.get("/api/projects", projectController.getAllProjects);
    app.put("/api/projects/:id/update-status", projectController.updateProjectStatus);
    app.delete("/api/projects/:id", projectController.deleteProject);
};