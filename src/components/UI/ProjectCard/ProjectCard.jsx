import React, { useState, useEffect } from 'react';

const ProjectCard = ({project}) => {

    useEffect(() => {
        console.log(project);
    }, []);
    
    return ( 
        <div>{project.name}</div>
     );
}
 
export default ProjectCard;