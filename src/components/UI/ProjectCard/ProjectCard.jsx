import React, { useEffect } from 'react';
import './ProjectCard.styles.css';

const ProjectCard = ({project}) => {

    useEffect(() => {
        console.log(project);
    }, []);
    
    return ( 
        <div className="project-card">{project.name}</div>
     );
}
 
export default ProjectCard;