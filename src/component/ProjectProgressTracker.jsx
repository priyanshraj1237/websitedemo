import React from 'react';

const ProjectProgressTracker = () => {
  const projects = [
    { name: 'Web Development Project', progress: 80 },
    { name: 'Mobile App Design', progress: 60 },
  ];

  return (
    <div>
      <h3>Project Progress</h3>
      {projects.map((project, idx) => (
        <div key={idx} style={{ marginBottom: '20px' }}>
          <h4>{project.name}</h4>
          <progress value={project.progress} max="100" style={{ width: '100%' }} />
          <div>{project.progress}% completed</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectProgressTracker;
