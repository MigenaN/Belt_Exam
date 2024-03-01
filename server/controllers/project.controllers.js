const Project = require('../models/project.models');

module.exports.createProject = (request, response) => {
    Project.create(request.body)
    .then(project => response.json(project))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllProjects = (request, response) => {
    Project.find()
    .then(projects => response.json(projects))
    .catch(err => response.status(400).json(err));
}

module.exports.updateProjectStatus = (request, response) => {
    Project.findOne({ _id: request.params.id })
    .then(project => {
        if (!project) {
        return response.status(404).json({ error: 'Project not found' });
        }

        project.status = request.body.newStatus;
        return project.save();
        })
            .then(updatedProject => response.json(updatedProject))
            .catch(err => response.status(400).json(err));
}

module.exports.deleteProject = (request, response) => {
    Project.findByIdAndDelete(request.params.id)
    .then(deletedProject => {
        if (!deletedProject) {
        return response.status(404).json({ error: 'Project not found' });
        }

        response.json(deletedProject);
    })
    .catch(err => response.status(400).json(err));
}
