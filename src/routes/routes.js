const routes = {
  root: { path: '/', exact: false },
  home: { path: '/home', exact: true },
  category: { path: '/categories/:id(\\d+)', exact: true },
  contact: { path: '/contacts/:id(\\d+)', exact: true },
  search: { path: '/search', exact: true },
  addContact: { path: '/contact_add/:id(\\d+)', exact: true },
  editContact: { path: '/contact_edit/:id(\\d+)', exact: true },
  // account: { path: '/account/:id(\\d+)', exact: true },
  account: { path: '/account', exact: true },
};

export default routes;
