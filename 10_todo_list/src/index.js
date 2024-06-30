import "./style.css";
import { TodoItem, Project, Category } from "./logic.js";
import { displaySidebar, displayInit, createProject } from "./display.js";

const newProjectButton = document.querySelector("#new-project-button");

// Create Examples
const workCategory = new Category("Work");
const personalCategory = new Category("Personal");

const projectA = new Project(
  "Project A",
  "An important work project",
  workCategory
);
const task1 = new TodoItem(
  "Complete documentation",
  "Write user guide for new feature",
  new Date("2024-07-15"),
  "high"
);
const task2 = new TodoItem(
  "Code review",
  "Review pull requests for sprint",
  new Date("2024-07-10"),
  "medium"
);
projectA.addTodoItem(task1);
projectA.addTodoItem(task2);

const projectB = new Project("Project B", "A personal project", workCategory);
const task3 = new TodoItem(
  "Plan vacation",
  "Research destinations and book flights",
  new Date("2024-08-01"),
  "low"
);
const task4 = new TodoItem(
  "Grocery shopping",
  "Buy ingredients for weekend dinner",
  new Date("2024-07-02"),
  "medium"
);
projectB.addTodoItem(task3);
projectB.addTodoItem(task4);

const projectC = new Project(
  "Project C",
  "A personal project",
  personalCategory
);
const task5 = new TodoItem(
  "Plan vacation",
  "Research destinations and book flights",
  new Date("2024-08-01"),
  "low"
);
const task6 = new TodoItem(
  "Grocery shopping",
  "Buy ingredients for weekend dinner",
  new Date("2024-07-02"),
  "medium"
);
projectC.addTodoItem(task5);
projectC.addTodoItem(task6);

const projectD = new Project(
  "Project D",
  "A personal project",
  personalCategory
);
const task7 = new TodoItem(
  "Plan vacation",
  "Research destinations and book flights",
  new Date("2024-08-01"),
  "low"
);
const task8 = new TodoItem(
  "Grocery shopping",
  "Buy ingredients for weekend dinner",
  new Date("2024-07-02"),
  "medium"
);
projectD.addTodoItem(task7);
projectD.addTodoItem(task8);

newProjectButton.addEventListener("click", () => {
  const projectForm = createProject(document);

  projectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const projectData = Object.fromEntries(formData);

    if ("category" in projectData) {
      const titlesSet = new Set(
        Category.getAllCategories().map((obj) => obj.title)
      );
      if (titlesSet.has(projectData.category)) {
        projectData.category = Category.getCategory(projectData.category);
      } else {
        projectData.category = new Category(projectData.category);
      }
    }

    console.log(projectData);
    const newProject = new Project(...Object.values(projectData));
    console.log(newProject);
    console.log(Category.getAllCategories());
    displaySidebar(document);
    displayInit(document);
  });
});

displaySidebar(document);
displayInit(document);
// displayProject(document, projectA);
