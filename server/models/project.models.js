const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        minlength: 3,
        unique: [true, "ProjectName must be unique"]
    },
    dueDate: {
        type: Date,
        required: [true, "DueDate is required"]
    },
    status: {
        type: String,
        default: 'Backlog',
    },
}, {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
