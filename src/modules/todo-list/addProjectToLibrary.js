import addProjectDOM from "../ui-interface/addProjectDOM";

export default function addProjectToLibrary(projects, project, containerForProjects) {
    if (project === "" || project in projects) return
    else {
        let fixedProjectName = project.replace(/\s+/g, "");
        projects[fixedProjectName] = [];
        addProjectDOM(containerForProjects, project, projects)
    }
};
