import React from 'react';
import './ProjectTag.css';

const ProjectTag = ({title = "React"}) => {
    return ( 
        <div className="project-tag">
            <span>#{title}</span>
        </div>
     );
}
 
export default ProjectTag;