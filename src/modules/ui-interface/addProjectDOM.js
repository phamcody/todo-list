import task from "./task";
export default function addProjectDOM(containerForProjects, project, projects) {

    let projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');
    let projectName = document.createElement('button');
    projectName.classList.add('project-name');
    projectName.classList.add('choice');
    projectName.textContent = project;
    let projectDelete = document.createElement('button');
    projectDelete.classList.add('project-delete');
    projectDelete.textContent = 'X';
    projectsContainer.appendChild(projectName);
    projectsContainer.appendChild(projectDelete);
    containerForProjects.appendChild(projectsContainer);


    // delete project from DOM and library
    projectDelete.addEventListener('click', (e) => {

        let shortcut = e.target.parentNode.childNodes[0].textContent;
        let i = 0;

        while (i < projects[shortcut].length) {
            let taskName = projects[shortcut][0]['task'];
            for (let project in projects) {
                let index = projects[project].findIndex(item => item['task'] === taskName);
                if (index === -1) {
                    console.log('N/A');
                }
                else {
                    projects[project].splice(index, 1);
                }
            }
        };
        task().placeTasks(projects);



        console.log(projects);


        containerForProjects.removeChild(projectsContainer);
        if (e.target.parentNode.childNodes[0].textContent in projects) {
            delete projects[e.target.parentNode.childNodes[0].textContent];
            if (document.querySelector('#selected') === null) {
                let reset = document.querySelector('.choice');
                reset.setAttribute('id', 'selected');
                let contentHeader = document.querySelector('.content-header');
                let current = document.querySelector('#selected');
                contentHeader.textContent = current.textContent;
                task().placeTasks(projects);
            }
        }
    })
}