export default function getElementPosition(e) {
  const elRect = e.target.getBoundingClientRect();
  return {
    windowX: parseInt(document.documentElement.clientWidth),
    windowY: parseInt(document.documentElement.clientHeight),
    rect: elRect,
  };
}
