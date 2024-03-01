import axios from 'axios';
import { useEffect, useState } from 'react';
import './Dashboard.css'
import { Link } from 'react-router-dom';

const Dashboard = () => {
const [projects, setProjects] = useState([]);
const [update, setUpdate] = useState(false);

useEffect(() => {
    axios.get('http://localhost:8000/api/projects')
        .then(res => setProjects(res.data))
        .catch(err => console.log(err));

    console.log("useEffect");
}, [update]);

const changeProjectStatus = (id, newStatus) => {
    axios.put(`http://localhost:8000/api/projects/${id}/update-status`, { newStatus })
        .then(res => { 
            console.log(res);
            setUpdate(!update);
        })
        .catch(err => console.log(err));
    };
const removeProject = (projectId) => {
    axios.delete(`http://localhost:8000/api/projects/${projectId}`)
        .then((res) => {
        setProjects((prevProjects) => prevProjects.filter((project) => project._id !== projectId));
        })
        .catch((err) => console.log(err));
    };

    return (
    <div>
        <h1>Project Manager</h1>
            <div className="dashboard-container">
                <div className="column">
                    <h3 className='backlog'>Backlog</h3>
                    <ul className="column">
                        {projects.filter(project => project.status === 'Backlog').map((project, i) => (
                        <li key={i}>{project.projectName} {project.dueDate} 
                            <button className='btn1' onClick={() => changeProjectStatus(project._id, 'In Progress')}>Start Project <span>&#8250;</span></button>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="column">
                    <h3 className='inprogress'>InProgress</h3>
                    <ul className="column"> {projects.filter(project => project.status === 'In Progress').map((project, i) => (
                        <li key={i}> {project.projectName} {project.dueDate} 
                            <button className='btn2' onClick={() => changeProjectStatus(project._id, 'Completed')}>Move to Completed <span>&#8250;</span> </button>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="column">
                    <h3 className='completed'>Completed</h3>
                    <ul className="column"> {projects.filter(project => project.status === 'Completed').map((project, i) => (
                        <li key={i}>{project.projectName} {project.dueDate} 
                            <button className='btn3' onClick={() => removeProject(project._id)}> <span>&#10005;</span> Remove Project</button>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <Link  to="/projects/new">
                <button className='btn' type="button">Add New Project</button>
            </Link>
    </div>
    );
};

export default Dashboard;



