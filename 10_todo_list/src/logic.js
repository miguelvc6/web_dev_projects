/**
 * Represents a single todo item in the application.
 */
class TodoItem {
  /**
   * Create a new TodoItem.
   * @param {string} title - The title of the todo item.
   * @param {string} [description=""] - The description of the todo item.
   * @param {Date|null} [dueDate=null] - The due date of the todo item.
   * @param {string} [priority="low"] - The priority of the todo item.
   */
  constructor(title, description = "", dueDate = null, priority = "low") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;

    this.validateTodoItem();
  }

  validateTodoItem() {
    if (typeof this.title !== "string" || this.title.trim() === "") {
      throw new Error("Title is required and must be a non-empty string.");
    }

    if (typeof this.description !== "string") {
      throw new Error("Description must be a string.");
    }

    if (this.dueDate !== null && !(this.dueDate instanceof Date)) {
      throw new Error("DueDate must be a Date object or null.");
    }

    const validPriorities = ["low", "medium", "high"];
    if (!validPriorities.includes(this.priority.toLowerCase())) {
      throw new Error(
        `Priority must be one of the following: ${validPriorities.join(", ")}.`
      );
    }
  }

  /**
   * Toggle the completion status of the todo item.
   */
  toggleComplete() {
    this.completed = !this.completed;
  }
}

/**
 * Represents a category that can contain multiple projects.
 */
class Category {
  static #allCategories = new Map();

  /**
   * Create a new Category.
   * @param {string} title - The title of the category.
   */
  constructor(title) {
    if (typeof title !== "string" || title.trim() === "") {
      throw new Error(
        "Category title is required and must be a non-empty string."
      );
    }
    this.title = title;
    this.projects = new Set();
    Category.#allCategories.set(this.title, this);
  }

  static getAllCategories() {
    return Array.from(Category.#allCategories.values());
  }

  static getCategory(title) {
    return Category.#allCategories.get(title);
  }

  addProject(project) {
    if (!(project instanceof Project)) {
      throw new Error("Project must be an instance of Project.");
    }
    this.projects.add(project);
  }

  removeProject(project) {
    this.projects.delete(project);
  }

  delete() {
    Category.#allCategories.delete(this.title);
  }
}

/**
 * Represents a project that can contain multiple todo items.
 */
class Project {
  static #allProjects = new Map();

  /**
   * Create a new Project.
   * @param {string} title - The title of the project.
   * @param {string} [description=""] - The description of the project.
   * @param {Category} category - The category to which this project belongs.
   */
  constructor(title, description = "", category) {
    this.title = title;
    this.description = description;
    this.todoItems = new Map();
    this.setCategory(category);

    this.validateProject();
    Project.#allProjects.set(this.title, this);
  }

  validateProject() {
    if (typeof this.title !== "string" || this.title.trim() === "") {
      throw new Error("Title is required and must be a non-empty string.");
    }

    if (typeof this.description !== "string") {
      throw new Error("Description must be a string.");
    }
  }

  setCategory(category) {
    if (!(category instanceof Category)) {
      throw new Error("Category must be an instance of Category.");
    }
    if (this.category) {
      this.category.removeProject(this);
    }
    this.category = category;
    this.category.addProject(this);
  }

  addTodoItem(todoItem) {
    if (!(todoItem instanceof TodoItem)) {
      throw new Error("Item must be an instance of TodoItem.");
    }
    this.todoItems.set(todoItem.title, todoItem);
  }

  removeTodoItem(todoItemTitle) {
    this.todoItems.delete(todoItemTitle);
  }

  getTodoItem(title) {
    return this.todoItems.get(title);
  }

  getAllTodoItems() {
    return Array.from(this.todoItems.values());
  }

  delete() {
    Project.#allProjects.delete(this.title);
    this.category.removeProject(this);
  }

  static getAllProjects() {
    return Array.from(Project.#allProjects.values());
  }

  static getProject(title) {
    return Project.#allProjects.get(title);
  }
}

export { TodoItem, Project, Category };
