import { createMatchSelector } from 'connected-react-router';

const addToEndOfString = (string, length, value) => {
  if (string.length > length) return string.slice(0, length) + value;
  return string;
};

const matchProjectQuery = createMatchSelector({ path: '/projects/:project' });
const matchTodoQuery = createMatchSelector({ path: '/todos/:todo' });

const search = (array, requestString, slice) => {
  if (typeof requestString !== 'string' || !requestString.trim()) return [];
  requestString = requestString.toLowerCase();
  const result = array.filter(item => {
    if (
      item.title.toLowerCase().includes(requestString) ||
      item.description.toLowerCase().includes(requestString)
    )
      return item;
  });

  if (slice > 0) {
    return result.map(item => ({
      ...item,
      title: addToEndOfString(item.title, 75, ' ...'),
      description: addToEndOfString(item.description, 120, ' ...'),
    }));
  }

  return result;
};

const filterQuery = {
  getIsDoneTodos: state => state.filter(item => item.isDone === true),
  getProjectTodos: (state, project) => state.filter(item => item.project === project),
  getCurrentTodo: (state, currentId) => state.filter(item => item.id === currentId),
};

const [
  projectQuerySelector,
  allTodosSelector,
  titleFromTriggerId,
  isImportantTodosSelector,
  searchTodosSelector,
  foundItemsSelector,
  todosReduceProjects,
  currentTodoSelector,
  checkedId,
] = [
  //projectQuerySelector
  state => {
    const { items } = state.entities.todos;
    const location = matchProjectQuery(state);
    if (location === null) return items;
    return filterQuery.getProjectTodos(items, location.params.project);
  },

  //allTodosSelector
  ({ entities }) => entities.todos.items,

  //titleFromTriggerId
  ({ entities, modules }) =>
    entities.todos.items.find(item => modules.contextMenu.triggerId === item.id),

  //isImportantTodosSelector
  ({ entities }) => filterQuery.getIsDoneTodos(entities.todos.items),

  //searchTodosSelector
  ({ entities, modules }) => search(entities.todos.items, modules.search.requestString, 1),

  //foundItemsSelector
  ({ entities, modules }) => entities.todos.foundItems,

  //todosReduceProjects
  ({ entities }, projects) =>
    entities.todos.items.reduce((acc, item) => {
      // console.log(item, 'items ------>');
      if (acc.hasOwnProperty(item.project)) {
        acc[item.project].count += 1;
        if (item.isDone) {
          acc[item.project].importants += 1;
        }
      }
      return acc;
    }, projects),
  //currentTodoSelector
  state => {
    const { items } = state.entities.todos;
    const location = matchTodoQuery(state);
    console.log(location.params.todo, 'LOCATION PRAMS TODO');
    if (location === null) return items;
    return filterQuery.getCurrentTodo(items, location.params.todo);
  },
  //checkedId
  ({ entities }) => entities.todos.checkedId,
];

export default {
  allTodosSelector,
  titleFromTriggerId,
  searchTodosSelector,
  foundItemsSelector,
  projectQuerySelector,
  isImportantTodosSelector,
  todosReduceProjects,
  currentTodoSelector,
  checkedId,
};
