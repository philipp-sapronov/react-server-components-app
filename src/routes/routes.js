const projectsRoutes = {
  root: { path: '/', exact: false },
  home: { path: '/', exact: true },
  projects: { path: '/projects', exact: true },
  currentProject: { path: '/projects/:project', exact: true },
  todos: { path: '/todos', exact: true },
  isImportantTodos: { path: '/todos/importants', exact: true },
  currentTodos: { path: '/todos/:todo(\\d+)', exact: true },
  searchTodos: { path: '/search', exact: true },
};

export default projectsRoutes;
