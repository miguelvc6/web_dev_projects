import { TodoItem, Project, Category } from "./logic.js";
import Icon from "./focusflow.png";

// Category Display

function displaySidebar(document) {
  const sideBar = document.querySelector("#side-bar-content");
  sideBar.innerHTML = "";

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.id = "focusflow-logo";

  sideBar.appendChild(myIcon);

  Category.getAllCategories().forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    categoryDiv.textContent = category.title;

    const uList = document.createElement("ul");

    category.projects.forEach((project) => {
      const projectInstance = document.createElement("li");
      projectInstance.classList.add("project");

      const projectButton = document.createElement("button");
      projectButton.classList.add("project-button");
      projectButton.textContent = project.title;

      projectButton.addEventListener("click", (e) => {
        displayProject(document, project);
      });

      projectInstance.appendChild(projectButton);
      uList.appendChild(projectInstance);
    });

    categoryDiv.appendChild(uList);

    sideBar.appendChild(categoryDiv);
  });
}

// Initial Display

function displayInit(document) {
  const projectDisplay = document.querySelector("#display");
  projectDisplay.innerHTML = "";

  // ToDo Lists
  const projectTodo = document.createElement("div");
  projectTodo.id = "project-todo";

  Project.getAllProjects().forEach((project) => {
    const todos = project.getAllTodoItems();
    todos.forEach((todoItem) => {
      const todoItemDiv = document.createElement("div");
      todoItemDiv.classList.add("todo-div");

      todoItemDiv.addEventListener("click", () => {
        displayTodoElement(document, project, todoItem, todoItemDiv);
      });

      const todoItemDivContracted = document.createElement("div");
      todoItemDivContracted.classList.add("todo-div-contracted");

      const todoTitle = document.createElement("h3");
      todoTitle.textContent = todoItem.title;
      todoItemDivContracted.appendChild(todoTitle);

      if (todoItem.completed) {
        todoItemDivContracted.appendChild(createTick(document));
      } else {
        todoItemDivContracted.appendChild(createCross(document));
      }

      const todoPriority = document.createElement("p");
      todoPriority.textContent = todoItem.priority;
      todoItemDivContracted.appendChild(todoPriority);

      todoItemDiv.appendChild(todoItemDivContracted);
      projectTodo.appendChild(todoItemDiv);
    });
    projectDisplay.appendChild(projectTodo);
  });
}

// Project Display

function displayProject(document, project) {
  if (!(project instanceof Project)) {
    throw new Error(
      `Project must be a valid Project instance, but is ${project.constructor.name}.`
    );
  }
  const projectDisplay = document.querySelector("#display");
  projectDisplay.innerHTML = "";

  // Project top
  const projectTop = document.createElement("div");
  projectTop.id = "project-top";

  const projectTopLeft = document.createElement("div");
  projectTopLeft.id = "project-top-left";

  const projectTitle = document.createElement("h1");
  projectTitle.textContent = project.title;
  projectTopLeft.appendChild(projectTitle);

  const projectCategory = document.createElement("h3");
  projectCategory.textContent = project.category.title;
  projectTopLeft.appendChild(projectCategory);

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  projectTopLeft.appendChild(projectDescription);

  projectTop.appendChild(projectTopLeft);

  const projectTopRight = document.createElement("div");
  projectTopRight.id = "project-top-right";

  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.classList.add("project-button");
  deleteProjectButton.textContent = "Delete Project";

  deleteProjectButton.addEventListener("click", () => {
    console.log(Project.getAllProjects());
    project.delete();
    console.log(Project.getAllProjects());
    displaySidebar(document);
    displayInit(document);
  });

  projectTopRight.appendChild(deleteProjectButton);

  projectTop.appendChild(projectTopRight);

  projectDisplay.appendChild(projectTop);

  // ToDo Lists
  const projectTodo = document.createElement("div");
  projectTodo.id = "project-todo";

  const todos = project.getAllTodoItems();
  todos.forEach((todoItem) => {
    const todoItemDiv = document.createElement("div");
    todoItemDiv.classList.add("todo-div");

    todoItemDiv.addEventListener("click", () => {
      displayTodoElement(document, project, todoItem, todoItemDiv);
    });

    const todoItemDivContracted = document.createElement("div");
    todoItemDivContracted.classList.add("todo-div-contracted");

    const todoTitle = document.createElement("h3");
    todoTitle.textContent = todoItem.title;
    todoItemDivContracted.appendChild(todoTitle);

    if (todoItem.completed) {
      todoItemDivContracted.appendChild(createTick(document));
    } else {
      todoItemDivContracted.appendChild(createCross(document));
    }

    const todoPriority = document.createElement("p");
    todoPriority.textContent = todoItem.priority;
    todoItemDivContracted.appendChild(todoPriority);

    todoItemDiv.appendChild(todoItemDivContracted);
    projectTodo.appendChild(todoItemDiv);
  });

  const todoItemDiv = document.createElement("div");
  todoItemDiv.classList.add("todo-div");

  todoItemDiv.addEventListener("click", () => {
    createToDo(document, project);
  });

  const createTodoItemDiv = document.createElement("div");
  createTodoItemDiv.classList.add("todo-div-contracted");

  const todoTitle = document.createElement("h3");
  todoTitle.textContent = "Create New To Do";
  createTodoItemDiv.appendChild(todoTitle);

  todoItemDiv.appendChild(createTodoItemDiv);
  projectTodo.appendChild(todoItemDiv);
  projectDisplay.appendChild(projectTodo);
}

// ToDo Display

function displayTodoElement(document, project, todoItem, todoItemDiv) {
  const expandedDiv = todoItemDiv.querySelector(".todo-div-expanded");

  if (expandedDiv) {
    todoItemDiv.removeChild(expandedDiv);
  } else {
    const todoItemDivExpanded = document.createElement("div");
    todoItemDivExpanded.classList.add("todo-div-expanded");

    const todoDescription = document.createElement("p");
    todoDescription.textContent = todoItem.description;
    todoItemDivExpanded.appendChild(todoDescription);

    const todoDueDate = document.createElement("p");
    todoDueDate.textContent = todoItem.dueDate;
    todoItemDivExpanded.appendChild(todoDueDate);

    const todoComplete = document.createElement("button");
    todoComplete.classList.add("project-button");
    todoComplete.textContent = "Toggle Complete Task";
    todoComplete.addEventListener("click", () => {
      todoItem.toggleComplete();
      displayProject(document, project);
      console.log(todoItem.completed);
    });
    todoItemDivExpanded.appendChild(todoComplete);

    const todoDelete = document.createElement("button");
    todoDelete.classList.add("project-button");
    todoDelete.textContent = "Delete Task";
    todoDelete.addEventListener("click", () => {
      project.removeTodoItem(todoItem.title);
      displayProject(document, project);
    });
    todoItemDivExpanded.appendChild(todoDelete);

    todoItemDiv.appendChild(todoItemDivExpanded);
  }
}

// New Project

function createFormElement(type, name, labelText, options = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = "form-field";

  if (labelText) {
    const label = document.createElement("label");
    label.htmlFor = name;
    label.textContent = labelText;
    wrapper.appendChild(label);
  }

  const input = document.createElement(
    type === "textarea" ? "textarea" : "input"
  );
  input.name = name;
  input.id = name;

  if (type !== "textarea") {
    input.type = type;
  }

  // Apply any additional options
  Object.keys(options).forEach((key) => {
    input[key] = options[key];
  });

  wrapper.appendChild(input);
  return wrapper;
}

function createForm(fields, formId) {
  const form = document.createElement("form");
  form.id = formId;

  fields.forEach((field) => {
    const element = createFormElement(
      field.type,
      field.name,
      field.label,
      field.options
    );
    form.appendChild(element);
  });

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);
  return form;
}

const projectFields = [
  { type: "text", name: "title", label: "Title" },
  { type: "textarea", name: "description", label: "Description" },
  { type: "text", name: "category", label: "Category" },
];

const todoFields = [
  { type: "text", name: "title", label: "Title" },
  { type: "textarea", name: "description", label: "Description" },
  { type: "date", name: "dueDate", label: "Due Date" },
  {
    type: "select",
    name: "priority",
    label: "Priority",
    options: {
      innerHTML: `
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    `,
    },
  },
];

function createToDo(document, project) {
  const todoDisplay = document.querySelector("#display");
  todoDisplay.innerHTML = "";

  const todoDiv = document.createElement("div");
  todoDiv.id = "new-todo-div";

  const todoForm = createForm(todoFields, "new-todo-form");
  const newTodoButton = todoForm.lastChild;

  newTodoButton.addEventListener("click", () => {
    todoForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(this);
      const todoData = Object.fromEntries(formData);

      todoData.dueDate = new Date(todoData.dueDate);

      const newTodo = new TodoItem(...Object.values(todoData));
      project.addTodoItem(newTodo);

      displaySidebar(document);
      displayProject(document, project);
    });
  });

  todoDiv.appendChild(todoForm);
  todoDisplay.appendChild(todoDiv);

  return todoForm;
}

function createProject(document) {
  const projectDisplay = document.querySelector("#display");
  projectDisplay.innerHTML = "";

  const projectDiv = document.createElement("div");
  projectDiv.id = "new-project-div";

  const projectForm = createForm(projectFields, "new-project-form");

  projectDiv.appendChild(projectForm);
  projectDisplay.appendChild(projectDiv);

  return projectForm;
}

// Auxiliary style function

function createTick(document) {
  const svgNS = "http://www.w3.org/2000/svg";
  const tick = document.createElementNS(svgNS, "svg");

  tick.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", svgNS);
  tick.setAttribute("fill", "none");
  tick.setAttribute("viewBox", "0 0 24 24");
  tick.setAttribute("stroke-width", "1.5");
  tick.setAttribute("stroke", "currentColor");
  tick.setAttribute("stroke", "currentColor");
  tick.setAttribute("height", "1rem");

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  );

  tick.appendChild(path);
  return tick;
}

function createCross() {
  const svgNS = "http://www.w3.org/2000/svg";
  const removeEx = document.createElementNS(svgNS, "svg");

  removeEx.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", svgNS);
  removeEx.setAttribute("fill", "none");
  removeEx.setAttribute("viewBox", "0 0 24 24");
  removeEx.setAttribute("stroke-width", "1.5");
  removeEx.setAttribute("stroke", "currentColor");
  removeEx.setAttribute("class", "size-6");
  removeEx.setAttribute("height", "1rem");

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  );

  removeEx.appendChild(path);
  return removeEx;
}

export { displaySidebar, displayProject, displayInit, createProject };
