import selectProject from "./selectProject";
import addProjectFormDOM from "./addProjectForm";
import task from "./task";


export default function createWebsite(projects) {


    const container = document.querySelector('#container');


    // header
    
    let header = document.createElement('div');
    header.setAttribute('id', 'header');
    
    let logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'oey';
    
    let mode = document.createElement('button');
    mode.classList.add('modes');
    mode.textContent = '🌖';
    
    container.appendChild(header);
    header.appendChild(logo);
    header.appendChild(mode);
    
    // main
    
    let mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'main-container');

    let navigationContainer = document.createElement('div');
    navigationContainer.classList.add('navigation-container');

    let topNavContainer = document.createElement('div');
    topNavContainer.classList.add('top-nav-container');
    let bottomNavContainer = document.createElement('div');
    bottomNavContainer.classList.add('bottom-nav-container');

    let allButton = document.createElement('button');
    allButton.textContent = 'All';
    allButton.setAttribute('id', 'selected');
    allButton.classList.add('choice');
    let todayButton = document.createElement('button');
    todayButton.textContent = 'Today';
    todayButton.classList.add('choice');
    let highPriorityButton = document.createElement('button');
    highPriorityButton.textContent = 'High Priority';
    highPriorityButton.classList.add('choice');
    allButton.classList.add('top-nav-buttons');
    todayButton.classList.add('top-nav-buttons');
    highPriorityButton.classList.add('top-nav-buttons');

    topNavContainer.appendChild(allButton);
    topNavContainer.appendChild(todayButton);
    topNavContainer.appendChild(highPriorityButton);

    let bottomNavHeader = document.createElement('div');
    bottomNavHeader.textContent = 'Projects';
    bottomNavHeader.classList.add('bottom-nav-header');
    bottomNavContainer.appendChild(bottomNavHeader);

    let containerForProjects = document.createElement('div');
    containerForProjects.classList.add('container-for-projects');
    bottomNavContainer.appendChild(containerForProjects);

    let addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project-button');
    addProjectButton.textContent = 'Add Project';


    // MAKE A CONTAINER FOR THE PROJECTS CONTAINER

    bottomNavContainer.appendChild(addProjectButton);

    addProjectButton.addEventListener('click', () => {
        addProjectFormDOM(bottomNavContainer, addProjectButton, projects, containerForProjects);
        addProjectButton.disabled = 'true';
    })

    // content container section

    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    let topContentContainer = document.createElement('div');
    topContentContainer.classList.add('top-content-container');

    let contentHeader = document.createElement('div');
    contentHeader.classList.add('content-header');
    contentHeader.textContent = 'All';
    topContentContainer.appendChild(contentHeader);

    let contentButton = document.createElement('button');
    contentButton.classList.add('content-button');
    contentButton.textContent = '+';
    topContentContainer.appendChild(contentButton);

    let bottomContentContainer = document.createElement('div');
    bottomContentContainer.classList.add('bottom-content-container');


    contentContainer.appendChild(topContentContainer);
    contentContainer.appendChild(bottomContentContainer);

    container.appendChild(mainContainer);
    mainContainer.appendChild(navigationContainer);
    mainContainer.appendChild(contentContainer);
    navigationContainer.appendChild(topNavContainer);
    navigationContainer.appendChild(bottomNavContainer);

    selectProject(projects);

    contentButton.addEventListener('click', () => {
        task().createTaskForm();
        contentButton.disabled = true;

        task().add(projects);


    });



    /*


    */


    // footer
    
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = 'created by phamcody @ github.com';
    container.appendChild(footer);


}