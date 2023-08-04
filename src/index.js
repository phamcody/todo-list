import createWebsite from "./modules/ui-interface/createWebsite";
import '../src/styles.css';
import task from "./modules/ui-interface/task";

let storedData = JSON.parse(localStorage.getItem('user'));
if (storedData) {
    console.log("Launching stored data");
    createWebsite(storedData);
    task().placeTasks(storedData);
    task().loadProjects(storedData);
}
else {
    console.log("No stored data");
    const projects = {
        All: [],
        Today: [],
        HighPriority: []
    }
    createWebsite(projects);
}


/*

Stored input can NOT be reset every refresh
Projects needs to be submitting to another empty thing.
That empty thing will be set as the stored item
The stored item will be converted

*/