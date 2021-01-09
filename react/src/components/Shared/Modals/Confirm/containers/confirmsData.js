import { selectors as projectsEntitiesSelectors } from '../../../../entities/projects';
import { selectors as notesEntitiesSelectors } from '../../../../entities/todos';

const { titleFromTriggerId: projectTitle } = projectsEntitiesSelectors;
const { titleFromTriggerId: noteTitle } = notesEntitiesSelectors;
// (currentId(state))
export default {
  projects: state => {
    const item = projectTitle(state);
    console.log(state, 'selector item title');
    if (!item) return;
    return `Delete project "${item.title}" ?`;
  },
  todos: state => {
    const item = noteTitle(state);
    if (!item) return;
    return `Delete note "${item.title}" ?`;
  },
};
