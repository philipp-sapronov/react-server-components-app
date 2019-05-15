const [isVisible, targetId, targetDomain, targetPosition] = [
  ({ modules }) => modules.contextMenu.isVisible,
  ({ modules }) => modules.contextMenu.targetId,
  ({ modules }) => modules.contextMenu.targetDomain,
  ({ modules }) => modules.contextMenu.targetPosition,
];

export default { isVisible, targetId, targetDomain, targetPosition };
