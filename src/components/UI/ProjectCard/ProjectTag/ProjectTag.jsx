import React from 'react';
import IconWrapper from '../../../icons/IconWrapper.jsx';
import './ProjectTag.css';

const ProjectTag = ({title = "React"}) => {
    return ( 
        <div className="project-tag">
            <IconWrapper type="tag"/>
            <span>{title}</span>
        </div>
     );
}
 
export default ProjectTag;