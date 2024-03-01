import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AddNewProject.css'

const AddNewProject = ({ onPlanProject }) => {
const [projectName, setProjectName] = useState('');
const [dueDate, setDueDate] = useState('');
const navigate = useNavigate();

const planProject = () => {
    
    axios.post('http://localhost:8000/api/projects', { projectName, dueDate })
        .then((res) => {
            setPlanProject(res.data);
            setProjectName('');
            setDueDate('');
            navigate('/');
        })
        .catch((err) => console.log(err));
};

return (
    
    <div >
        <h1>Project Manager</h1>
        <Link to="/">
            <span onClick={() => navigate('/')}>Back to Dashboard</span>
        </Link>
        <div className='container'>
            <h3>Plan a new Project</h3>
            <div>
                <p>
                    <label  className='action-input'>Project: </label>
                    <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
                </p>
                <p>
                    <label className='action-input'>Due Date: </label>
                    <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
                </p>
                <Link to="/">
                    <button className='btn' type="button" onClick={planProject}>Plan Project</button>
                </Link>
            </div>
        </div> 
    </div>
);
};

export default AddNewProject;


