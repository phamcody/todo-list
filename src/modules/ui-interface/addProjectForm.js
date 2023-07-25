import addProjectToLibrary from "../todo-list/addProjectToLibrary";
export default function addProjectFormDOM(bottomNavContainer, addProjectButton, projects, containerForProjects) {
    
    let projectFormContainer = document.createElement('div');
    projectFormContainer.classList.add('project-form-container');
    let form = document.createElement('form');
    form.setAttribute('id', 'project-name-form');
    let addButton = document.createElement('button');
    addButton.classList.add('project-add-button');
    addButton.textContent = '✔';

    projectFormContainer.appendChild(form);
    projectFormContainer.appendChild(addButton);

    let titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'project-name');
    titleInput.setAttribute('name', 'projectName');
    form.appendChild(titleInput);

    bottomNavContainer.appendChild(projectFormContainer);

    addButton.addEventListener('click', () => {
        addProjectToLibrary(projects, titleInput.value, containerForProjects);
        addProjectButton.removeAttribute('disabled');
        bottomNavContainer.removeChild(projectFormContainer);
    })
}