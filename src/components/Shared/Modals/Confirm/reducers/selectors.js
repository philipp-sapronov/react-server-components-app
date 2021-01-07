const [isVisible, action] = [
  ({ modules }) => modules.confirm.isVisible,
  ({ modules }) => modules.confirm.action,
];

export default { isVisible, action };
