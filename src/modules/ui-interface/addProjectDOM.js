
export default function addProjectDOM(containerForProjects, project, projects) {

    let projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');
    let projectName = document.createElement('button');
    projectName.classList.add('project-name');
    projectName.textContent = project;
    let projectDelete = document.createElement('button');
    projectDelete.classList.add('project-delete');
    projectDelete.textContent = 'X';
    projectsContainer.appendChild(projectName);
    projectsContainer.appendChild(projectDelete);
    containerForProjects.appendChild(projectsContainer);


    // delete project from DOM and library
    projectDelete.addEventListener('click', (e) => {
        containerForProjects.removeChild(projectsContainer);
        if (projects.includes(e.target.parentNode.childNodes[0].textContent)) {
            projects.splice(projects.indexOf(e.target.parentNode.childNodes[0].textContent), 1)
            console.log(projects);
        }
    })
}