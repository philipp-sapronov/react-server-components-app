const [isSidebar, currentSpace] = [
  ({ modules }) => modules.layout.isSidebar,
  ({ modules }) => modules.layout.currentSpace,
];

export default { isSidebar, currentSpace };
