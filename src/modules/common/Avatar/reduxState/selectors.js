const [AVATAR] = 'avatar';
const [getColor] = [
  //projectQuerySelector
  state => {
    const { colors } = state.modules[AVATAR].entities;

    return colors;
  },
];

export default {
  getNewColour,
};
